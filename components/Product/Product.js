(function () {
  window.addEventListener("DOMContentLoaded", () => {
    //--Sticky Add To Cart
    try {
      console.log('init sticky');
      const ATC = document.getElementById("Product__sticky-ATC");
      const form = document.getElementById("Product-form");
      const footer = document.getElementById("SiteFooter");
      let width = window.innerWidth;
      let height = window.innerHeight;
      window.addEventListener("resize", (e) => {
        width = window.innerWidth;
        height = window.innerHeight;
      });
      window.addEventListener("scroll", (e) => {
        let elRec;
        if (form !== null) {
          elRec = form.getBoundingClientRect();
        }
        const footerRec = footer.getBoundingClientRect();

        if (form !== null) {
          if (elRec.bottom < 100) {
            ATC.classList.add("Product__sticky-ATC--open");
          } else {
            ATC.classList.remove("Product__sticky-ATC--open");
          }
          if (footerRec.top < height) {
            ATC.classList.remove("Product__sticky-ATC--open");
          }
        }
      });
    } catch (err) {
      console.log(err);
    }

    //--Quantity Selector for *Sticky ATC*
    try {
      const input = document.getElementById("Product-qs-input-atc");
      const placeholder = document.getElementById("Product-qs-value-text-atc");
      const plus = document.getElementById("Product-qs-plus-atc");
      const minus = document.getElementById("Product-qs-minus-atc");
      const price = document.getElementById("Product-details-btn-price-sticky");

      const incVal = () => {
        let value = input.value;
        const newVal = ++value;
        setNewVals(newVal);
      };
      const decVal = () => {
        let value = input.value;
        const newVal = --value;
        if (newVal < 1) {
          setNewVals(newVal);
        } else {
          setNewVals(newVal);
        }
      };
      const setNewVals = (newVal) => {
        const value = newVal;
        if (value < 1) {
          input.value = 1;
          placeholder.innerHTML = 1;
        } else {
          input.value = value;
          placeholder.innerHTML = value;
        }
        updateBtnPrice(value);
      };
      const updateBtnPrice = (value) => {
        if (value != 0) {
          const currentPrice = price.dataset.price;
          const symbol = price.dataset.symbol;
          const iso = price.dataset.code;
          const isoLower = iso.toLowerCase();

          if (isoLower == 'usd' || isoLower == 'aud' || isoLower == 'cad' || isoLower == 'gbp') {
            const number = Number(currentPrice);
            let newPrice = value * number;
            console.log(currentPrice, number, newPrice);
            const string = newPrice.toString();
            const check = string.includes('.');
            if (check) {
              newPrice = newPrice.toFixed(2);
            }
            price.innerHTML = symbol + newPrice;
          }
          if (isoLower == 'eur') {
            const array = currentPrice.split('');
            const index = array.findIndex(item => item == ',');
            array.splice(index, 1, '.');
            const newVal = array.join('');
            const number = Number(newVal);
            let newPrice = value * number;
            const string = newPrice.toString();
            const check = string.includes('.');
            if (check) {
              newPrice = newPrice.toFixed(2);
            }
            price.innerHTML = symbol + newPrice;
          }
        }
      };
      if (plus) {
        plus.addEventListener("click", incVal);
      }
      if (minus) {
        minus.addEventListener("click", decVal);
      }
    } catch (err) {
      console.log(err);
    }

    //--Size Picker
    try {
      const hiddenInputs = document.querySelectorAll(".product-option");
      const circleOptions = document.querySelectorAll(
        ".Product-details__form-option--regular"
      );
      const circleOptionsSticky = document.querySelectorAll(
        ".Product-details__form-option--sticky"
      );
      const variantPrice = document.getElementById('Product-details-btn-price');
      const variantPriceSticky = document.getElementById('Product-details-btn-price-sticky');
      const varSymbol = variantPrice.dataset.symbol;
      const input = document.getElementById("Product-qs-input-main");
      const placeholder = document.getElementById("Product-qs-value-text-main");

      const optionHandler = (id, price) => {
        console.log('optionHandler');
        variantPrice.dataset.price = price;
        variantPrice.innerHTML = `${varSymbol}${price}`;
        if (variantPriceSticky) {
          variantPriceSticky.dataset.price = price;
          variantPriceSticky.innerHTML = `${varSymbol}${price}`;
        }
        const afterpayInstallment = document.querySelector('.afterpay-instalments');
        if (afterpayInstallment) {
          let newPrice = Number(price) / 4;
          newPrice = newPrice.toFixed(2);
          afterpayInstallment.innerHTML = `${varSymbol}${newPrice}`
        }
        const cID = id;
        
        circleOptions.forEach((cOption) => {
          const opID = cOption.dataset.key;
          if (cID == opID) {
            cOption.classList.add("Product-selected-option");
            cOption.children[0].style.fontWeight = "700";
          } else {
            cOption.classList.remove("Product-selected-option");
            cOption.children[0].style.fontWeight = "400";
          }
        });
        circleOptionsSticky.forEach((cOption) => {
            const opID = cOption.dataset.key;
            if (cID == opID) {
              cOption.classList.add("Product-selected-option");
              cOption.children[0].style.fontWeight = "700";
            } else {
              cOption.classList.remove("Product-selected-option");
              cOption.children[0].style.fontWeight = "400";
            }
          });

        hiddenInputs.forEach((input) => {
          const iID = input.dataset.key;
        //   console.log(""+cID,iID)
          if (cID == iID) {
            input.selected = "selected";
          } else {
            input.selected = "";
          }
        });
        input.value = 1;
        placeholder.innerHTML = 1;
      };
      if (circleOptions) {
        circleOptions.forEach((option) => {
          option.addEventListener("click", (e) =>
            optionHandler(option.dataset.key, option.dataset.price)
          );
        });
      }
      if (circleOptionsSticky) {
        circleOptionsSticky.forEach((option) => {
          option.addEventListener("click", (e) =>
            optionHandler(option.dataset.key, option.dataset.price)
          );
        });
      }

      //Init - Preselect first available variant
      for (let i = 0; i < circleOptions.length; i++) {
        console.log(circleOptions[i].classList);
        if (circleOptions[i].classList == "Product-details__form-option") {

          variantPrice.innerHTML = `${varSymbol}${circleOptions[i].dataset.price}`;
          var checkExist = setInterval(function () {
            if (document.querySelector('.afterpay-instalments')) {
              optionHandler(circleOptions[i].dataset.key, circleOptions[i].dataset.price);
              clearInterval(checkExist);
            }
          }, 100);
          break;
        }
      }
      for (let i = 0; i < circleOptionsSticky.length; i++) {
        if (circleOptionsSticky[i].classList == "Product-details__form-option Product-details__form-option--sticky") {
          optionHandler(circleOptionsSticky[i].dataset.key, circleOptionsSticky[i].dataset.price);
          variantPriceSticky.innerHTML = `${varSymbol}${circleOptionsSticky[i].dataset.price}`
          break;
        }
      }
    } catch (err) {
      console.log(err);
    }



    //--Quantity Selector
    try {
      const input = document.getElementById("Product-qs-input-main");
      const placeholder = document.getElementById("Product-qs-value-text-main");
      const plus = document.getElementById("Product-qs-plus-main");
      const minus = document.getElementById("Product-qs-minus-main");
      const price = document.getElementById("Product-details-btn-price");

      const incVal = () => {
        let value = input.value;
        const newVal = ++value;
        setNewVals(newVal);
      };
      const decVal = () => {
        let value = input.value;
        const newVal = --value;
        if (newVal < 1) {
          setNewVals(newVal);
        } else {
          setNewVals(newVal);
        }
      };
      const setNewVals = (newVal) => {
        console.log('fired newVals');
        const value = newVal;
        if (value < 1) {
          input.value = 1;
          placeholder.innerHTML = 1;
        } else {
          input.value = value;
          placeholder.innerHTML = value;
        }
        updateBtnPrice(value);
      };
      const updateBtnPrice = (value) => {
        if (value != 0) {
          const currentPrice = price.dataset.price;
          const symbol = price.dataset.symbol;
          const iso = price.dataset.code;
          const isoLower = iso.toLowerCase();
          const afterpayInstallment = document.querySelector('.afterpay-instalments');

          if (isoLower == 'usd' || isoLower == 'aud' || isoLower == 'cad' || isoLower == 'gbp') {
            const number = Number(currentPrice);
            let newPrice = value * number;
            const string = newPrice.toString();
            const check = string.includes('.');
            if (check) {
              newPrice = newPrice.toFixed(2);
            }
            price.innerHTML = symbol + newPrice;
            if (afterpayInstallment) {
              let apPrice = Number(newPrice) / 4;
              let newAPPrice = apPrice.toFixed(2);
              afterpayInstallment.innerHTML = `${symbol}${newAPPrice}`
            }
          }
          if (isoLower == 'eur') {
            const array = currentPrice.split('');
            const index = array.findIndex(item => item == ',');
            array.splice(index, 1, '.');
            const newVal = array.join('');
            const number = Number(newVal);
            let newPrice = value * number;
            const string = newPrice.toString();
            const check = string.includes('.');
            if (check) {
              newPrice = newPrice.toFixed(2);
            }
            price.innerHTML = symbol + newPrice;
            if (afterpayInstallment) {
              let apPrice = Number(newPrice) / 4;
              let newAPPrice = apPrice.toFixed(2);
              afterpayInstallment.innerHTML = `${symbol}${newAPPrice}`
            }
          }
        }
      };
      if (plus) {
        plus.addEventListener("click", incVal);
      }
      if (minus) {
        minus.addEventListener("click", decVal);
      }

    } catch (err) {
      console.log('Quantity Selector: Product: Error', err);
    }

    //--Main Product Sliders
    try {
      var galleryThumbs = new Swiper(".Product__slider-nav", {
        direction: "vertical",
        spaceBetween: 15,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        }
      });
      var galleryTop = new Swiper(".Product__slider", {
        spaceBetween: 10,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        thumbs: {
          swiper: galleryThumbs,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          870: {
            slidesPerView: 1,
          },
        },
      });
    } catch (err) {
      console.log(err);
    }

    //--Accordion
    try {
      const accordion = document.getElementById("Product-accordion");
      const drawers = document.querySelectorAll(".pd__accordion-drawer");
      // - to detect browser
      navigator.sayswho = (function () {
        var ua = navigator.userAgent,
          tem,
          M =
            ua.match(
              /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
            ) || [];
        if (/trident/i.test(M[1])) {
          tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
          return "IE " + (tem[1] || "");
        }
        if (M[1] === "Chrome") {
          tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
          if (tem != null)
            return tem.slice(1).join(" ").replace("OPR", "Opera");
        }
        M = M[2]
          ? [M[1], M[2]]
          : [navigator.appName, navigator.appVersion, "-?"];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
        return M.join(" ");
      })();

      const scrollIntoView = () => {
        accordion.scrollIntoView();
      };
      const scrollIntoViewIfNeeded = () => {
        accordion.scrollIntoViewIfNeeded();
      };
      const drawerHandler = (id) => {
        const ID = id.split("-")[1];
        drawers.forEach((drawer) => {
          const dID = drawer.id.split("-")[1];
          if (ID == dID) {
            if (drawer.classList.length > 1) {
              closeAllDrawers();
            } else {
              drawer.classList.add("pd__accordion-drawer-open");
            }
          } else {
            drawer.classList.remove("pd__accordion-drawer-open");
            if (navigator.sayswho.split(" ")[0] == "Safari") {
              scrollIntoViewIfNeeded();
            } else {
              scrollIntoView();
            }
          }
        });
      };
      const closeAllDrawers = () => {
        drawers.forEach((drawer) => {
          drawer.classList.remove("pd__accordion-drawer-open");
        });
      };
      drawers.forEach((drawer) => {
        drawer.addEventListener("click", (e) => drawerHandler(drawer.id));
      });
    } catch (err) {
      console.log(err);
    }

    //Ingredients
    try {
      $(document).ready(function () {
        $(".pi__slider").slick({
          arrows: true,
          dots: false,
          draggable: true,
          swipe: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
          // asNavFor: ".pi__slider-nav",
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: "0px",
                draggable: true,
                swipe: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
              },
            },
          ],
        });
        $(".pi__slider-nav").slick({
          slidesToShow: "auto",
          asNavFor: ".pi__slider",
          dots: false,
          arrows: false,
          centerMode: true,
          focusOnSelect: true,
          useTransform: false,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: false,
                arrows: false,
                centerMode: true,
                focusOnSelect: true,
                useTransform: true,
              },
            },
          ],
        });
      });

      const ingSlider = document.querySelector(".pi__slider");
      if (ingSlider !== null) {
        const ingSlides = ingSlider.dataset.slide;
        const slides = parseInt(ingSlides);
        if (slides < 4) {
          ingSlider.children[0].style.display = "none !important";
          ingSlider.children[2].style.display = "none !important";
        }
      }
    } catch (err) {
      console.log(err);
    }
    //Testimonials
    try {
      $(document).ready(function () {
        $(".pba__slider").slick({
          arrows: false,
          draggable: true,
          swipe: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: false,
          asNavFor: ".pba__slider-nav",
        });
        $(".pba__slider-nav").slick({
          slidesToShow: "auto",
          asNavFor: ".pba__slider",
          dots: false,
          arrows: false,
          focusOnSelect: true,
        });
      });
    } catch (err) {
      console.log(err);
    }
  });
})();
