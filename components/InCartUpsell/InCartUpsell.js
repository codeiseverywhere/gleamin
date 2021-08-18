window.Gleamin = window.Gleamin || {};

(window.Gleamin.InCartUpsell = function (module, $, Behaviors, betteroffcanvas, Shopify, AjaxCart, Promise) {
    "use strict";

    var last_known_cart = null;
    AjaxCart.MiniCart.hooks.attach("alter_cart_data", function (data) {
        last_known_cart = data;
    });

    /**
     * Alter a URL to contain a particular query parameter.
     * 
     * In the event that the URL already contains more than one query key, only
     * the first query key will be altered. No attempt will be made to remove
     * redundant query keys.
     * 
     * @param {*} base_url The URL to alter.
     * @param {*} query_key The query key to alter.
     * @param {*} query_val The value that the query key should take.
     * @returns The altered URL.
     */
    function add_query_to_url(base_url, query_key, query_val) {
        var query_loc = base_url.indexOf("?"),
            current_key_loc = base_url.indexOf("&" + query_key + "=", query_loc),
            next_value_loc;

        if (current_key_loc === -1) {
            current_key_loc = base_url.indexOf("?" + query_key + "=", query_loc);
        }

        next_value_loc = base_url.indexOf("&", current_key_loc + 1);

        if (query_loc === -1) {
            return base_url + "?" + query_key + "=" + query_val;
        } else if (current_key_loc === -1) {
            return base_url + "&" + query_key + "=" + query_val;
        } else {
            if (next_value_loc === -1) {
                next_value_loc = base_url.length;
            }

            return base_url.slice(0, current_key_loc + query_key.length + 2) + query_val + base_url.slice(next_value_loc);
        }
    }

    /**
     * Loads in-cart upsells for the AJAX Cart.
     */
    function InCartUpsell() {
        Behaviors.init(InCartUpsell, this, arguments);

        this.$content = this.$elem.find("[data-incartupsell-content]");

        this.retrieve_upsells(last_known_cart);
    }

    Behaviors.inherit(InCartUpsell, Behaviors.Behavior);

    InCartUpsell.QUERY = "[data-incartupsell]";

    /**
     * Replace any value placeholders in an offer's HTML.
     * 
     * @param {jQuery} $offer The offer element to be modified.
     * @param {Object} line_item The line item data to pull placeholders from.
     */
    InCartUpsell.prototype.replace_placeholders = function ($offer, line_item) {
        $offer.find("*").each(function (index, plelem) {
            var i, prop;

            for (i = 0; i < plelem.attributes.length; i += 1) {
                if (plelem.attributes[i].value.indexOf("...line_item.") === 0) {
                    prop = plelem.attributes[i].value.slice("...line_item.".length);
                    plelem.attributes[i].value = line_item[prop];
                }
            }
        });
    }

    /**
     * Load the upsells for a given set of cart data.
     */
    InCartUpsell.prototype.retrieve_upsells = function (data) {
        var i, upsell_product_promises = []
        let showUpSells = true;
        for (i = 0; i < data.items.length; i += 1) {
            if (data.items[i].title == 'Vitamin C Clay Mask - Duo') {
                showUpSells = false;
            }
            if (data.items[i].title == 'Twisted Satin Headband') {
                showUpSells = false;
            }


        }

        this.$elem.hide();

        for (i = 0; i < data.items.length; i += 1) {
            if (data.items[i].properties !== undefined && data.items[i].properties !== null &&
                (data.items[i].properties.hasOwnProperty("shipping_interval_frequency")
                    || data.items[i].properties.hasOwnProperty("shipping_interval_unit_type"))) {
                continue;
            }

            upsell_product_promises.push(new Promise(function (resolve, reject) {
                var item = data.items[i], //Always use `item`, do not attempt to use closed-over `i`.
                    md_url = add_query_to_url(item.url, "view", "upsellmetadata");

                $.ajax({
                    "url": md_url,
                    "dataType": "html",
                    "success": function (data, jqXHR) {
                        try {
                            resolve([JSON.parse(data), item]);
                        } catch (e) {
                            reject(e);
                        }
                    }.bind(this),
                    "error": function (jqXHR, textStatus, errorThrown) {
                        reject(new Error("Got error with product metadata: " + item.title + ", " + textStatus + ", " + errorThrown));
                    }.bind(this)
                });
            }.bind(this)));
        }
        if (showUpSells) {
            Promise.allSettled(upsell_product_promises).then(function (results) {
                var i, j, products = [], my_products = [], my_offers = [],
                    my_variants = [], rendered_products = [],
                    offer_handle_keys = [], handle_j, is_handle_unique,
                    offer_variant_keys = [], variant_j, is_variant_unique;

                for (i = 0; i < results.length; i += 1) {
                    if (results[i] && results[i].status == "fulfilled") {
                        if (results[i].value[0].upsell && results[i].value[0].upsell.products) {
                            my_products = results[i].value[0].upsell.products.split(",");
                        } else {
                            my_products = [];
                        }

                        if (results[i].value[0].upsell && results[i].value[0].upsell.product_offers) {
                            my_offers = results[i].value[0].upsell.product_offers.split(",");
                        } else {
                            my_offers = [];
                        }

                        if (results[i].value[0].upsell && results[i].value[0].upsell.variants) {
                            my_variants = results[i].value[0].upsell.variants.split(",");
                        } else {
                            my_variants = [];
                        }

                        for (j = 0; j < my_products.length || j < my_offers.length; j += 1) {
                            if (my_products[j]) {
                                handle_j = my_products[j].trim();
                                is_handle_unique = offer_handle_keys.indexOf(handle_j) === -1
                                variant_j = my_variants[j] !== undefined && my_variants[j].trim() ? my_variants[j].trim() : "any";
                                is_variant_unique = offer_variant_keys.indexOf(variant_j) === -1;

                                if (is_handle_unique && is_variant_unique) {
                                    products.push({
                                        "handle": handle_j,
                                        "offer_type": my_offers[j] !== undefined && my_offers[j].trim() ? my_offers[j].trim() : "upsellincart",
                                        "variant_id": variant_j,
                                        "line_item": results[i].value[1],
                                    });

                                    offer_handle_keys.push(handle_j);
                                    offer_variant_keys.push(variant_j);
                                }
                            }
                        }
                    } else if (results[i] && results[i].status == "rejected") {
                        console.error(results[i].reason);
                    }
                }

                for (i = 0; i < products.length && i < 2; i += 1) {
                    // Don't redundantly offer the same product on variant upgrades.
                    // Also, for various reasons, we need to use the ECMA fuzzy
                    // compares.
                    if (products[i].line_item.handle == products[i].handle
                        && products[i].line_item.variant_id == products[i].variant_id) {
                        continue;
                    }

                    rendered_products.push(new Promise(function (resolve, reject) {
                        var product = products[i],
                            url = "/products/" + product.handle;

                        url = add_query_to_url(url, "view", product.offer_type);

                        if (product.variant_id !== "" || product.variant_id !== "any") {
                            url = add_query_to_url(url, "variant", product.variant_id);
                        }

                        $.ajax({
                            "url": url,
                            "dataType": "html",
                            "success": function (data) {
                                resolve([$(data), product]);
                            }.bind(this),
                            "error": function (jqXHR, textStatus, errorThrown) {
                                reject(new Error("Got error with product: " + product.handle + ", using template: " + product.offer_type + ", " + textStatus + ", " + errorThrown));
                            }.bind(this)
                        });
                    }.bind(this)));
                }

                return Promise.allSettled(rendered_products);
            }.bind(this)).then(function (results) {
                var i, elems = [], $offer, product;

                if (results.length > 0) {
                    this.$elem.show();
                } else {
                    this.$elem.hide();
                }

                Behaviors.content_removal(this.$content.children());
                this.$content.children().remove();

                for (i = 0; i < results.length; i += 1) {
                    if (results[i] && results[i].status == "fulfilled") {
                        $offer = results[i].value[0];
                        product = results[i].value[1];

                        this.replace_placeholders($offer, product.line_item);

                        this.$content.append($offer);
                    } else if (results[i] && results[i].status == "rejected") {
                        console.error(results[i].reason)
                    }
                }

                Behaviors.content_ready(this.$content.children());
            }.bind(this));

        }
    };

    Behaviors.register_behavior(InCartUpsell);

    module.InCartUpsell = InCartUpsell;

    return module;
}(window.Gleamin.InCartUpsell || {},
    window.jQuery,
    window.Behaviors,
    window.betteroffcanvas,
    window.Shopify,
    window.SpaceStation.AjaxCart,
    window.Promise));