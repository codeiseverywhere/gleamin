window.Gleamin = window.Gleamin || {};

window.Gleamin.UpgradeUpsell = (function (Behaviors, $, Shopify, AjaxCart) {
    "use strict";

    var last_known_cart = null;
    AjaxCart.MiniCart.hooks.attach("alter_cart_data", function (data) {
        last_known_cart = data;
    });

    /**
     * Allows providing an "upgrade upsell" that both removes an old product
     * from the cart and replaces it with an upgraded one.
     */
    function UpgradeUpsell() {
        Behaviors.init(UpgradeUpsell, this, arguments);

        this.upgrade = this.$elem.data("incartupsell-upgrade");
        this.upgrade_from = this.$elem.data("incartupsell-upgrade-from");
        this.upgrade_quantity = this.$elem.data("incartupsell-upgrade-quantity")

        this.$elem.on("click", this.upgrade_intent.bind(this));

        this.upgrading = false;
    }

    Behaviors.inherit(UpgradeUpsell, Behaviors.Behavior);

    UpgradeUpsell.QUERY = "[data-incartupsell-upgrade]";

    UpgradeUpsell.prototype.find_existing_item_qty = function (id) {
        var i;

        for (i = 0; i < last_known_cart.items.length; i += 1) {
            if (last_known_cart.items[i].id === id) {
                return last_known_cart.items[i].quantity;
            }
        }

        return 0;
    }

    /**
     * User intent to perform the actual upgrade.
     */
    UpgradeUpsell.prototype.upgrade_intent = function () {
        var updates = {};

        updates[this.upgrade_from] = 0;
        updates[this.upgrade] = this.upgrade_quantity + this.find_existing_item_qty(this.upgrade);

        if (!this.upgrading) {
            this.$elem.prop("disabled", true);

            $.ajax({
                "url": "/cart/update.js",
                "data": {
                    "updates": updates
                },
                "dataType": "json",
                "success": function (data, textStatus, jqXHR) {
                    Shopify.onCartUpdate(data);
                },
                "error": function (jqXHR, textStatus, errorThrown) {
                    Shopify.onError(jqXHR, textStatus);
                },
            });
        }

        this.upgrading = true;
    }

    Behaviors.register_behavior(UpgradeUpsell);

    return UpgradeUpsell;
}(window.Behaviors, window.jQuery, window.Shopify, window.SpaceStation.AjaxCart));