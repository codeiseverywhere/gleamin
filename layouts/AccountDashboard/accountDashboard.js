(function () {
  try {
    window.addEventListener("DOMContentLoaded", () => {
      const ordersHeader = document.getElementById(
        "customer-account-mobile-orders-header"
      );
      const ordersArrow = document.getElementById(
        "customer-account-mobile-orders-arrow"
      );
      const orders = document.getElementById("customer-account-mobile-orders");

      const dropDownHandler = () => {
        const state = orders.dataset.state;
        if (state === "closed") {
          orders.dataset.state = "open";
          ordersArrow.classList.add("Customer__account-subheader-arrow--flip");
          orders.classList.add("Customer__account-orders--mobile-open");
        } else {
          orders.dataset.state = "closed";
          ordersArrow.classList.remove(
            "Customer__account-subheader-arrow--flip"
          );
          orders.classList.remove("Customer__account-orders--mobile-open");
        }
      };
      if (ordersHeader) {
        ordersHeader.addEventListener("click", dropDownHandler);
      }
    });
  } catch (err) {
    console.log(err);
  }
})();
