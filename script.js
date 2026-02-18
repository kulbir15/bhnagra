const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const openForm = document.getElementById("openForm");
const closeForm = document.getElementById("closeForm");
const formModal = document.getElementById("formModal");

openForm.addEventListener("click", () => {
  formModal.classList.add("active");
});

closeForm.addEventListener("click", () => {
  formModal.classList.remove("active");
});

