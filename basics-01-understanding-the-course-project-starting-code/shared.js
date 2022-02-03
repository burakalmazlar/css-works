const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalActionYes = document.querySelector(".modal a.modal__action");
const modalActionNo = document.querySelector(".modal button.modal__action");

const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

const close = (e) => {
  // backdrop.style.display = '';
  // modal.style.display = '';
  // mobileNav.style.display = '';
  backdrop.classList.remove("up");
  modal.classList.remove("open");
  mobileNav.classList.remove("show");
};

backdrop.addEventListener("click", close);
modalActionYes.addEventListener("click", close);
modalActionNo.addEventListener("click", close);

const selectPlanButton = document.querySelectorAll(".plan .button");

selectPlanButton.forEach((btn) => {
  if (btn) {
    btn.addEventListener("click", () => {
      backdrop.classList.add("up");
      modal.classList.add("open");
      // backdrop.style.display = 'initial';
      // modal.style.display = 'initial';
    });
  }
});

toggleButton.addEventListener("click", () => {
  backdrop.classList.add("up");
  mobileNav.classList.add("show");
});
