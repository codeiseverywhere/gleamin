(function (root, factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define("siteheader", ["jquery", "betteroffcanvas"], factory);
  } else {
    // Browser globals
    root.siteheader = factory(root.jQuery, root.betteroffcanvas);
  }
})(this, function ($, betteroffcanvas, ajaxCart, Handlebars) {
  "use strict";
  "feel good";

  function update_scroll() {
    var scrollTop = $(window).scrollTop(),
      $SiteHeader = $("[data-siteheader='siteheader']");

    if (scrollTop === 0) {
      $SiteHeader.addClass("is-SiteHeader--at_top");
      $SiteHeader.removeClass("is-SiteHeader--scrolled");
    } else {
      $SiteHeader.removeClass("is-SiteHeader--at_top");
      $SiteHeader.addClass("is-SiteHeader--scrolled");
    }
  }

  $(window).on("scroll", update_scroll);

  update_scroll();
});

//Test comment
//Mobile Menu Scripts
(function () {
  window.addEventListener("DOMContentLoaded", () => {
    try {
      const header = document.getElementById("SiteHeader");
      const mobileMenu = document.getElementById("Mobile-Menu");
      const toggle = document.getElementById("SiteHeader--menu-toggle");
      const toggleImage = document.getElementById("SiteHeader-icon-toggle");
      const crossImage = document.getElementById("SiteHeader-icon-cross");
      const viewHeight = window.innerHeight;
      const headerHeight = header.clientHeight;
      const remainingHeight = viewHeight - headerHeight;
      let menuState = false;

      const menuHandler = () => {
        if (menuState === true) {
          mobileMenu.style.maxHeight = `${remainingHeight}px`;
          crossImage.style.display = "block";
          toggleImage.style.display = "none";
        } else {
          mobileMenu.style.maxHeight = "0px";
          crossImage.style.display = "none";
          toggleImage.style.display = "block";
        }
      };

      const stateHandler = () => {
        const currentState = menuState;
        menuState = !currentState;
        menuHandler();
      };

      toggle.addEventListener("click", stateHandler);

      
    } catch (err) {
      console.log(err);
    }
  });
})();

//currency selector
//currency selector Desktop
(function () {
  window.addEventListener('DOMContentLoaded', () => {
    try {
      const selector = document.getElementById('SiteHeader-Currency-Selector');
      const list = document.getElementById('SiteHeader-currency-list');
      const form = document.querySelector('.desktop-shopify-currency-form')
      const input = document.getElementById('form-currency-input');
      const dropDownOptions = document.querySelectorAll('.SiteHeader--nc-item');

      const selectorHandler = () => {
        const state = selector.dataset.state;
        if (state == 'open') {
          selector.dataset.state = 'closed';
          list.classList.remove('SiteHeader--nav-currency--open');
        } else if (state == 'closed') {
          selector.dataset.state = 'open';
          list.classList.add('SiteHeader--nav-currency--open')
        }
      }
      const submitForm = () => {
        form.submit();
      }
      const setInputValue = (value) => {
        input.value = value;
        submitForm();
      }
      if (selector) {
        selector.addEventListener('click', selectorHandler);
      }
      if (dropDownOptions) {
        dropDownOptions.forEach(option => {
          option.addEventListener('click', (e) => setInputValue(option.dataset.selectedcurrency))
        })
      }
    } catch (err) {
      console.log(err);
    }
    try {
      const selectorMobile = document.getElementById('SiteHeader-Currency-Selector-Mobile');
      const listMobile = document.getElementById('SiteHeader-currency-list-mobile');
      const form = document.querySelector('.desktop-shopify-currency-form--mobile')
      const input = document.getElementById('form-currency-input-mobile');
      const dropDownOptions = document.querySelectorAll('.SiteHeader--nc-item--mobile');

      const selectorMobileHandler = () => {
        const state = selectorMobile.dataset.state;
        if (state == 'open') {
          selectorMobile.dataset.state = 'closed';
          listMobile.classList.remove('SiteHeader--nav-currency--open');
        } else if (state == 'closed') {
          selectorMobile.dataset.state = 'open';
          listMobile.classList.add('SiteHeader--nav-currency--open')
        }
      }
      const submitForm = () => {
        form.submit();
      }
      const setInputValue = (value) => {
        input.value = value;
        submitForm();
      }
      if (selectorMobile) {
        selectorMobile.addEventListener('click', selectorMobileHandler);
      }
      if (dropDownOptions) {
        dropDownOptions.forEach(option => {
          option.addEventListener('click', (e) => setInputValue(option.dataset.selectedcurrency))
        })
      }
    } catch (err) {
      console.log(err);
    }
  })
})();
