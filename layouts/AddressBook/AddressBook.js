(function () {
  window.addEventListener("DOMContentLoaded", () => {
    // Add Form
    const addForm = document.getElementById("Customer-add-form");
    const addBtn = document.getElementById("Customer__address-add-new-btn");
    const cancelAddBtn = document.getElementById("Customer-address-cancel-add");
    const addFormHandler = () => {
      let state = addForm.dataset.state;
      if (state === "hidden") {
        addForm.style.display = "block";
        addForm.dataset.state = "displayed";
        addBtn.style.display = "none";
      } else if (state === "displayed") {
        addForm.style.display = "none";
        addForm.dataset.state = "hidden";
        addBtn.style.display = "inline-block";
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    };
    if (addBtn) {
      addBtn.addEventListener("click", addFormHandler);
    }
    if (cancelAddBtn) {
      cancelAddBtn.addEventListener("click", addFormHandler);
    }

    // Edit Form
    const editForms = document.querySelectorAll(".Customer__address-form-wrap");
    const editBtns = document.querySelectorAll(".Customer__address-btn--edit");
    const cancelEditBtns = document.querySelectorAll(
      ".Customer__address-cancel-edit"
    );
    const editFormHandler = (id) => {
      const ID = id.split("-")[3];
      console.log(ID);
      editForms.forEach((form) => {
        const formID = form.id.split("-")[3];
        if (ID === formID) {
          const editState = form.dataset.state;
          console.log(formID, editState);
          if (editState === "hidden") {
            form.style.display = "block";
            form.dataset.state = "displayed";
          } else if (editState === "displayed") {
            form.style.display = "none";
            form.dataset.state = "hidden";
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }
        }
      });
    };
    editBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => editFormHandler(btn.id));
    });
    cancelEditBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => editFormHandler(btn.id));
    });

    //Delete
    const deleteBtn = document.querySelectorAll(
      ".Customer__address-btn--delete"
    );
    const deleteHandler = (el, id, msg) => {
      const ID = id;
      const MSG = msg;
      console.log(el, ID, MSG);
      if (confirm(`${MSG}`)) {
        Shopify.postLink("/account/addresses/" + ID, {
          parameters: { _method: "delete" },
        });
      }
    };
    deleteBtn.forEach((btn) => {
      btn.addEventListener("click", (e) =>
        deleteHandler(e.target, btn.dataset.formid, btn.dataset.deletemessage)
      );
    });

    //Initialize
    // const editFormProvinces = document.querySelectorAll(
    //   ".Customer__address-province"
    // );
    // const countrySelects = document.querySelectorAll(".AddressCountrySelect");
    // editFormProvinces.forEach((prov) => {
    //   const id = prov.dataset.formid;
    //   countrySelects.forEach((select) => {
    //     const selectID = select.id.split("_")[1];
    //     console.log(selectID, id);
    //     if (id === selectID) {
    //       const provinceArray = select.childNodes;
    //       console.log(provinceArray);
    //     }
    //   });
    // const countrySelector = "AddressCountry_" + id;
    // const provinceSelector = "AddressProvince_" + id;
    // const containerSelector = "AddressProvinceContainer_" + id;
    // if (Shopify) {
    //   new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
    //     hideElement: containerSelector,
    //   });
    // }
    // });
  });
})();
