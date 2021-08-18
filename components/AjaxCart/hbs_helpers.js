(function(Handlebars, Shopify) {
    "use strict";

    var CURRENCIES = {"USD": {
        "symbol": "$",
        "precision": 2
    }, "CAD": {
        "symbol": "$",
        "precision": 2
    }, "AUD": {
        "symbol": "$",
        "precision": 2
    }, "GBP": {
        "symbol": "£",
        "precision": 2
    }, "EUR": {
        "symbol": "€",
        "precision": 2
    }};

    /**
     * This handler is a proxy for `Shopify.formatMoney`.
     */
    Handlebars.registerHelper("AjaxCart_money", function() {
        var a_args = Array.prototype.slice.call(arguments),
            options = a_args.pop(),
            value = a_args.shift(),
            money_format = a_args.shift(),
            currency = a_args.shift(),
            currency_infos;

        if (!currency) {
            currency = Shopify.currency.active;
        }

        if (!money_format) {
            money_format = Shopify.money_format;
        }

        currency_infos = CURRENCIES[currency];
        if (currency_infos) {
            money_format = money_format.replace("$", currency_infos.symbol);
            value = value * Math.pow(10, 2 - currency_infos.precision);
        } else {
            console.warn("Could not find currency " + currency);
        }

        return Shopify.formatMoney(value, money_format);
    });
    
    /**
     * This handler emulates the `img_url` filter on Shopify's liquid
     * interpreter.
     * 
     * It works by exploiting the fact that the filter appears to just append
     * it's width/height parameter to the URL and let the CDN handle the
     * resize. Ergo, we can generate new URLs client-sided.
     * 
     * This does not support the crop, scale, or format parameters of the
     * original filter.
     */
    Handlebars.registerHelper("AjaxCart_img-url", function(url, desired_format) {
        var url_and_query = url.split("?"),
            url_without_query = url_and_query[0],
            query = url_and_query.slice(1).join("?"),
            path_and_extension = url_without_query.split("."),
            path_without_extension = path_and_extension.slice(0, path_and_extension.length - 1).join("."),
            extension = path_and_extension[path_and_extension.length - 1];
        
        if (desired_format !== undefined && extension != "ico") {
            return path_without_extension + "_" + desired_format + "." + extension + "?" + query;
        } else {
            return path_without_extension + "." + extension + "?" + query;
        }
    });

    /**
     * This handler filters out default options from an options list.
     * 
     * For some reason, Shopify doesn't tell you if a product's options
     * actually make sense, so we have to just do this here.
     */
    Handlebars.registerHelper("AjaxCart_not-default-option", function (item, options) {
        if (item.name === "Title" && item.value === "Default Title") {
            return options.inverse(this);
        } else {
            return options.fn(this);
        }
    });
}(window.Handlebars, window.Shopify));