const userIcon = document.querySelector(".nav-user-icon.online");
const settingsMenu = document.querySelector(".settings-menu");
const menu = document.querySelector(".nav-right i.fa-bars");
const menuInfo = document.querySelector(".imp-links.menu");
const searchIcon = document.querySelector(".search-box");
const darkTheme = document.getElementById("dark-btn");
const redBtn = document.querySelector(".settings-menu span");
const textarea = document.querySelector(".user-profile textarea");
const modalTextArea = document.querySelector(".user-container textarea");
const modalSubmitBtn = document.querySelector(".user-container .post-btn");
const textareaModal = document.querySelector(".text-area-modal");
const closeBtn = document.querySelector(".post-header .fa-solid");
const nextBtn = document.querySelector(".story-container .right");
const prevBtn = document.querySelector(".story-container .left");
const gallery = document.querySelector(".story-gallery");
const images = Array.from(document.querySelectorAll(".story"));
const arrowBtn = document.querySelector("i.arrow");
const logo = document.querySelector(".logo");
const searchInput = document.querySelector(".search-box input");

menu.addEventListener("click", () => {
  menuInfo.classList.toggle("show");
  settingsMenu.classList.remove("show");
});
userIcon.addEventListener("click", () => {
  settingsMenu.classList.toggle("show");
  menuInfo.classList.remove("show");
});
searchIcon.addEventListener("click", () => {
  searchIcon.classList.add("expand");
  searchInput.classList.add("display");
  logo.classList.add("hide");
  arrowBtn.style.display = "block";
  menu.style.display = "none";
});
arrowBtn.addEventListener("click", () => {
  searchIcon.classList.remove("expand");
  searchInput.classList.remove("display");
  logo.classList.remove("hide");
  arrowBtn.style.display = "none";
  menu.style.display = "block";
});
darkTheme.addEventListener("click", () => {
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  darkTheme.classList.toggle("dark-theme");
  redBtn.classList.toggle("dark-theme");
  document.body.classList.toggle("dark-mode");
});

if (localStorage.getItem("theme") == "light") {
  darkTheme.classList.remove("dark-theme");
  redBtn.classList.remove("dark-theme");
  document.body.classList.remove("dark-mode");
} else if (localStorage.getItem("theme") == "dark") {
  darkTheme.classList.add("dark-theme");
  redBtn.classList.add("dark-theme");
  document.body.classList.add("dark-mode");
} else {
  localStorage.setItem("theme", "light");
}

function removeSettingsMenu() {
  if (settingsMenu.classList.contains("show")) {
    settingsMenu.classList.remove("show");
  }
  if (menuInfo.classList.contains("show")) {
    menuInfo.classList.remove("show");
  }
}
textarea.addEventListener("click", () => {
  textareaModal.classList.add("display");
});
closeBtn.addEventListener("click", () => {
  textareaModal.classList.remove("display");
});

modalTextArea.addEventListener("input", (e) => {
  textarea.value = e.target.value;
  if (e.target.value.length > 0) {
    modalSubmitBtn.setAttribute("disabled", false);
    modalSubmitBtn.classList.add("active");
  } else {
    modalSubmitBtn.setAttribute("disabled", true);
    modalSubmitBtn.classList.remove("active");
  }
});

let currentImg = 1;
let startIndex = 3;

nextBtn.addEventListener("click", () => {
  currentImg++;
  startIndex++;
  updateImg();
});

prevBtn.addEventListener("click", () => {
  currentImg--;
  startIndex--;
  updateImg();
});

function updateImg() {
  if (currentImg > 1) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }

  if (startIndex === images.length) {
    nextBtn.style.display = "none";
    return;
  } else {
    nextBtn.style.display = "block";
  }
  gallery.classList.add("show-more-gallery");
  gallery.style.transform = `translateX(-${(currentImg - 1) * 25}%)`;
}
