(function () {
  window.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("Subscription__items-header");
    const list = document.getElementById("Subscription__items-list");
    const arrow = document.getElementById("arrow");

    const listHandler = () => {
      const viewWidth = window.innerWidth;
      if (viewWidth <= 1000) {
        const state = list.dataset.state;
        if (state === "closed") {
          list.dataset.state = "open";
          arrow.classList.add("Subscription__arrow-flip");
          list.classList.add("Subscription__items-list--open");
        } else {
          console.log("fired");
          list.dataset.state = "closed";
          arrow.classList.remove("Subscription__arrow-flip");
          list.classList.remove("Subscription__items-list--open");
        }
      }
    };
    if (header) {
      header.addEventListener("click", listHandler);
    }
  });
})();
