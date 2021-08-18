window.SpaceStation = window.SpaceStation || {};
window.SpaceStation.GiftWithPurchase = window.SpaceStation.GiftWithPurchase || {};

(window.SpaceStation.GiftWithPurchase.PromoEngine = function ($, AjaxCart, Shopify) {
    "use strict";

    var enableBOGOFeature = false;

    /**
     * The main class that holds GWP promotional state.
     * 
     * This class is intended to be modified as new promotions are created or
     * destroyed.
     */
    function PromoEngine() {
        $.getJSON('/cart.js', function (cart, textStatus) {
            this.check_cart(cart)
        }.bind(this)).fail(function (jqXHR, textStatus, error) {
            Shopify.onCartError(textStatus + ", ", error);
        }.bind(this));

        AjaxCart.MiniCart.hooks.attach("alter_cart_data", function(data) {
            this.check_cart(data);

            return data;
        }.bind(this));
    }

    /**
     * The current product to add to the cart.
     */
    PromoEngine.GIFT_PRODUCT = 39612056207553;

    /**
     * Check the cart's current promotional status, and execute any actions
     * necessary to bring it into compliance with promotional rules.
     * 
     * Specifically:
     * 
     * 1. Carts without a gift that qualify for one should have it added
     * 2. Carts with a gift that no longer qualify for one should have it
     * removed
     * 3. Carts with too much of the gift but qualify for less should have the
     * gift quantity decreased
     * 
     * Use the `add_free_product`, `remove_free_product` and
     * `reset_free_product_qty` methods to actually effect those changes.
     * 
     * @param {Object} data The cart data as fetched from cart.json.
     */
    PromoEngine.prototype.check_cart = function (data) {
        // This function is currently empty, as there is no active promo.
        // Usually, you'd examine the cart information in `data`, calculate how
        // much non-promotional value is in the cart, and then call one of the
        // following methods mentioned above to modify the cart.
    }

    /**
     * Action method that adds the free product to the cart.
     * 
     * This function should only be called when the current cart state says we
     * qualify but we don't have the promotion in the cart.
     * 
     * The free product will not actually *be* free unless it is either a
     * special hidden promotional variant, or there is a Shopify Script paired
     * with the promo engine that discounts the variant you add here.
     */
    PromoEngine.prototype.add_free_product = function() {
        let formData = {
            'items': [{
                'id': PromoEngine.GIFT_PRODUCT,
                'quantity': 1
            }]
        };
        fetch('/cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                this.refresh()
                return response.json();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    /**
     * Action method that removes the free product from the cart.
     * 
     * This function should only be called when the current cart state says we
     * do not qualify, but the promotion is in the cart.
     * 
     * Ideally you would use a Shopify Script that would prevent getting free
     * product without qualification; but this is not always possible. Hence,
     * it is best practice to have both an addition and removal method.
     */
    PromoEngine.prototype.remove_free_product = function() {
        $.post('/cart/change.js', { 'id': PromoEngine.GIFT_PRODUCT, 'quantity': 0 })
            .done(() => {
                this.refresh()
            })
            .fail((err) => {
                this.refresh()
            })
            .always(function () {
                // this.refresh()
            })
    }

    /**
     * Action method that updates the free product quantity if it is off.
     * 
     * This should only be called in the case where the user has somehow added
     * too much free product; `qty` is ordinarily set to one in this case.
     * 
     * This method may not be necessary if you are using a Shopify Script to
     * discount a non-promotional item; in which case you should allow it to
     * limit promotional value and not use this function.
     */
    PromoEngine.prototype.reset_free_product_qty = function (qty) {
        let gift_update = {};

        gift_update[PromoEngine.GIFT_PRODUCT] = qty;

        $.post('/cart/update.js', { updates: gift_update })
            .done(() => {
                this.refresh()
            })
            .fail((err) => {
                this.refresh()
            })
            .always(function () {
                // this.refresh()
            })
    }

    /**
     * Trigger a refresh on all active minicarts
     */
    PromoEngine.prototype.refresh = function() {
        AjaxCart.MiniCart.find_markup($(document)).forEach(function (v) {
            v.refresh()
        });
    }

    window.addEventListener('DOMContentLoaded', () => {
        const promoSettings = document.querySelector(".MainContent").dataset.promo;
        if (promoSettings == 'true') {
            enableBOGOFeature = true;
        }

        new PromoEngine();
    })

    return PromoEngine;
}(window.jQuery, window.SpaceStation.AjaxCart, window.Shopify));