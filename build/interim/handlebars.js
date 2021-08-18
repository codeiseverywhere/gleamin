this["SpaceStation"] = this["SpaceStation"] || {};
this["SpaceStation"]["AjaxCart"] = this["SpaceStation"]["AjaxCart"] || {};
this["SpaceStation"]["AjaxCart"]["cart"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"show_free_shipping") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":16},"end":{"line":51,"column":23}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"AjaxCart-free-shipping\">\r\n\r\n                    <h4 class=\"AjaxCart-free-shipping__title\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"has_free_shipping") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":36,"column":24},"end":{"line":41,"column":31}}})) != null ? stack1 : "")
    + "                    </h4>\r\n\r\n                    <div class=\"AjaxCart-free-shipping__bar\">\r\n                        <div class=\"AjaxCart-free-shipping__bar-progress\"\r\n                            style=\"width: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"percent_to_free_shipping") || (depth0 != null ? lookupProperty(depth0,"percent_to_free_shipping") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"percent_to_free_shipping","hash":{},"data":data,"loc":{"start":{"line":46,"column":42},"end":{"line":46,"column":72}}}) : helper)))
    + "%\">\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        You've earned free shipping!\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        You are only "
    + container.escapeExpression((lookupProperty(helpers,"AjaxCart_money")||(depth0 && lookupProperty(depth0,"AjaxCart_money"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"amount_remaining__free_shipping") : depth0),(depth0 != null ? lookupProperty(depth0,"money_format") : depth0),{"name":"AjaxCart_money","hash":{},"data":data,"loc":{"start":{"line":39,"column":37},"end":{"line":39,"column":101}}}))
    + " away from free\r\n                        shipping!\r\n";
},"7":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"AjaCart-item-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":62,"column":16},"end":{"line":113,"column":25}}})) != null ? stack1 : "")
    + "            </div>\r\n\r\n            <div class=\"AjaxCart-divider\"></div>\r\n\r\n            <div class=\"AjaxCart-up-sell\" data-incartupsell style=\"display: none;\">\r\n                <div class=\"AjaxCart-up-sell-widget\" data-incartupsell-content></div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n";
},"8":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"AjaxCart-item\">\r\n\r\n                    <div class=\"AjaxCart-item_image\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"featured_image") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":66,"column":24},"end":{"line":69,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\r\n\r\n                    <div class=\"AjaxCart-item_details\">\r\n                        <h3 class=\"AjaxCart-item_title\"><a href=\""
    + alias3(alias2(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\">"
    + alias3(alias2(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"product_title") : stack1), depth0))
    + "</a></h3>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"options_with_values") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":74,"column":24},"end":{"line":85,"column":31}}})) != null ? stack1 : "")
    + "                        <div class=\"AjaxCart-item_quantity_selector\" data-ajaxcart-quantity\r\n                            data-ajaxcart-quantity-lineitem=\""
    + alias3(alias2(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">\r\n                            <input class=\"AjaxCart-item_quantity\" type=\"number\" value=\""
    + alias3(alias2(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"quantity") : stack1), depth0))
    + "\">\r\n                            <button type=\"button\"\r\n                                class=\"AjaxCart-item_quantity_toggle AjaxCart-item_quantity_toggle--increase\"\r\n                                data-ajaxcart-quantitytoggle=\"1\">+</button>\r\n                            <button type=\"button\"\r\n                                class=\"AjaxCart-item_quantity_toggle AjaxCart-item_quantity_toggle--decrease\"\r\n                                data-ajaxcart-quantitytoggle=\"-1\">-</button>\r\n                        </div>\r\n                        <button type=\"button\" class=\"AjaxCart-item_remove\" data-ajaxcart-remove\r\n                            data-ajaxcart-remove-lineitem=\""
    + alias3(alias2(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">Remove</button>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"line_level_discount_applications") : stack1),{"name":"each","hash":{},"fn":container.program(15, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":98,"column":24},"end":{"line":108,"column":33}}})) != null ? stack1 : "")
    + "                        <span\r\n                            class=\"AjaxCart-item_price AjaxCart-item_price--total\">"
    + alias3((lookupProperty(helpers,"AjaxCart_money")||(depth0 && lookupProperty(depth0,"AjaxCart_money"))||container.hooks.helperMissing).call(alias1,((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"final_line_price") : stack1),(depth0 != null ? lookupProperty(depth0,"money_format") : depth0),{"name":"AjaxCart_money","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":110,"column":83},"end":{"line":110,"column":136}}}))
    + "</span>\r\n                    </div>\r\n                </div>\r\n";
},"9":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <img src=\""
    + alias1((lookupProperty(helpers,"AjaxCart_img-url")||(depth0 && lookupProperty(depth0,"AjaxCart_img-url"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"featured_image") : stack1)) != null ? lookupProperty(stack1,"url") : stack1),"200x",{"name":"AjaxCart_img-url","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":67,"column":34},"end":{"line":67,"column":85}}}))
    + "\"\r\n                            alt=\""
    + alias1(container.lambda(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"featured_image") : stack1)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\">\r\n";
},"11":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"AjaxCart-item_options\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"options_with_values") : stack1),{"name":"each","hash":{},"fn":container.program(12, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":76,"column":28},"end":{"line":83,"column":37}}})) != null ? stack1 : "")
    + "                        </div>\r\n";
},"12":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"AjaxCart_not-default-option")||(depth0 && lookupProperty(depth0,"AjaxCart_not-default-option"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),blockParams[0][0],{"name":"AjaxCart_not-default-option","hash":{},"fn":container.program(13, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":77,"column":28},"end":{"line":82,"column":60}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"AjaxCart-item_option\">\r\n                                <span class=\"AjaxCart-item_option_title\">"
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</span>:\r\n                                <span class=\"AjaxCart-item_option_value\">"
    + alias2(alias1(((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</span>\r\n                            </div>\r\n";
},"15":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"AjaxCart-item_discount\">\r\n                            "
    + alias1(container.lambda(((stack1 = ((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"discount_application") : stack1)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + ": <span\r\n                                class=\"AjaxCart-item_price AjaxCart-item_price--discount\">"
    + alias1((lookupProperty(helpers,"AjaxCart_money")||(depth0 && lookupProperty(depth0,"AjaxCart_money"))||container.hooks.helperMissing).call(alias2,((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"amount") : stack1),(depth0 != null ? lookupProperty(depth0,"money_format") : depth0),{"name":"AjaxCart_money","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":101,"column":90},"end":{"line":101,"column":137}}}))
    + "</span>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias2,((stack1 = ((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"discount_application") : stack1)) != null ? lookupProperty(stack1,"description") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":102,"column":28},"end":{"line":106,"column":35}}})) != null ? stack1 : "")
    + "                        </div>\r\n";
},"16":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"AjaxCart-item_discount_description\">\r\n                                "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = blockParams[1][0]) != null ? lookupProperty(stack1,"discount_application") : stack1)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "\r\n                            </div>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"AjaxCart-empty_state\">\r\n                <p class=\"AjaxCart-empty-text\">\r\n                    Your Bag is Empty\r\n                </p>\r\n            </div>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div id=\"AjaxCart-footer\" class=\"AjaxCart-footer"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"total_discount") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":254,"column":56},"end":{"line":254,"column":98}}})) != null ? stack1 : "")
    + "\">\r\n            <div class=\"AjaxCart-footer-inner\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"total_discount") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":256,"column":16},"end":{"line":265,"column":23}}})) != null ? stack1 : "")
    + "                <div class=\"AjaxCart-footer-details\">\r\n                    <p class=\"AjaxCart-footer-details-text\">\r\n                        Subtotal:\r\n                    </p>\r\n                    <p class=\"AjaxCart-footer-details-price\">\r\n                        "
    + container.escapeExpression((lookupProperty(helpers,"AjaxCart_money")||(depth0 && lookupProperty(depth0,"AjaxCart_money"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"total_price") : depth0),(depth0 != null ? lookupProperty(depth0,"money_format") : depth0),{"name":"AjaxCart_money","hash":{},"data":data,"loc":{"start":{"line":271,"column":24},"end":{"line":271,"column":67}}}))
    + "\r\n                    </p>\r\n                </div>\r\n                <div class=\"AjaxCart-footer-checkout\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"has_subscriptions") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data,"loc":{"start":{"line":275,"column":20},"end":{"line":283,"column":27}}})) != null ? stack1 : "")
    + "                </div>\r\n            </div>\r\n        </div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    return " has-discount";
},"23":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"AjaxCart-footer-details\">\r\n                        <p class=\"AjaxCart-footer-details-text\">\r\n                            Discount:\r\n                        </p>\r\n                        <p class=\"AjaxCart-footer-details-price discount-amount\">\r\n                            "
    + container.escapeExpression((lookupProperty(helpers,"AjaxCart_money")||(depth0 && lookupProperty(depth0,"AjaxCart_money"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"total_discount") : depth0),(depth0 != null ? lookupProperty(depth0,"money_format") : depth0),{"name":"AjaxCart_money","hash":{},"data":data,"loc":{"start":{"line":262,"column":28},"end":{"line":262,"column":74}}}))
    + "\r\n                        </p>\r\n                    </div>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "                    <a href=\"/cart\" class=\"AjaxCart-footer-checkout-link\">\r\n                        Review Cart\r\n                    </a>\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    return "                    <a href=\"/checkout\" class=\"AjaxCart-footer-checkout-link\">\r\n                        Checkout\r\n                    </a>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"AjaxCart\">\r\n    <div class=\"AjaxCart-inner\">\r\n\r\n        <hgroup class=\"AjaxCart-cart_header\">\r\n            <div class=\"AjaxCart-cart_header-top\">\r\n                <div class=\"AjaxCart-dismiss\" type=\"button\" data-dismiss=\"offcanvas\"\r\n                    data-target=\"#"
    + alias4(((helper = (helper = lookupProperty(helpers,"offcanvas_target_id") || (depth0 != null ? lookupProperty(depth0,"offcanvas_target_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"offcanvas_target_id","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":8,"column":34},"end":{"line":8,"column":57}}}) : helper)))
    + "\">\r\n                    <div class=\"AjaxCart-dismiss-inner\">\r\n                        <span class=\"AjaxCart-dismiss-bar AjaxCart-dismiss-bar-1\"></span>\r\n                        <span class=\"AjaxCart-dismiss-bar AjaxCart-dismiss-bar-2\"></span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"AjaxCart-cart_header-icon\">\r\n                    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                        x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" xml:space=\"preserve\" width=\"32\" height=\"32\">\r\n                        <title>bag 09</title>\r\n                        <g class=\"nc-icon-wrapper\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-width=\"1.5\"\r\n                            transform=\"translate(0.5 0.5)\" fill=\"#000000\" stroke=\"#000000\">\r\n                            <polygon fill=\"none\" stroke=\"#000000\" stroke-miterlimit=\"10\"\r\n                                points=\"29,31 3,31 6,9 26,9 \" />\r\n                            <path data-color=\"color-2\" fill=\"none\" stroke-miterlimit=\"10\"\r\n                                d=\"M11,13V6 c0-2.761,2.239-5,5-5h0c2.761,0,5,2.239,5,5v7\" />\r\n                        </g>\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"AjaxCart-cart_header-bottom\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":31,"column":16},"end":{"line":52,"column":23}}})) != null ? stack1 : "")
    + "            </div>\r\n\r\n\r\n        </hgroup>\r\n\r\n        <div class=\"AjaxCart-content\" style=\"height: calc(100vh - "
    + alias4(((helper = (helper = lookupProperty(helpers,"header_height") || (depth0 != null ? lookupProperty(depth0,"header_height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header_height","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":58,"column":66},"end":{"line":58,"column":85}}}) : helper)))
    + "px - 162px)\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams),"inverse":container.program(18, data, 0, blockParams),"data":data,"blockParams":blockParams,"loc":{"start":{"line":59,"column":12},"end":{"line":249,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":253,"column":8},"end":{"line":287,"column":15}}})) != null ? stack1 : "")
    + "\r\n\r\n    </div>\r\n</div>";
},"useData":true,"useBlockParams":true});
this["SpaceStation"]["AjaxCart"]["cart_error"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"AjaxCart AjaxCart--error\">\r\n    <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"friendly_error") || (depth0 != null ? lookupProperty(depth0,"friendly_error") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"friendly_error","hash":{},"data":data,"loc":{"start":{"line":2,"column":10},"end":{"line":2,"column":28}}}) : helper)))
    + "</span>\r\n    <span class=\"AjaxCart-error_message\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"error") || (depth0 != null ? lookupProperty(depth0,"error") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"error","hash":{},"data":data,"loc":{"start":{"line":3,"column":41},"end":{"line":3,"column":50}}}) : helper)))
    + "</span>\r\n</div>";
},"useData":true});