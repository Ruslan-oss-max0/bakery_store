const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModel = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModel);
modalBtnClose.addEventListener("click", toggleModel);
