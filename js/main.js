let menu = document.querySelector("header nav .menu");
let mainNav = document.querySelector("header nav .main-nav");
let lis = document.querySelectorAll("header nav .main-nav li a");

let signBox = document.querySelector("header nav .icons .sign-box ul");
let iconSign = document.querySelector("header nav .icons .sign-box");

let searchBox = document.querySelector("header nav .icons .search-box .form");
let iconSearch = document.querySelector("header nav .icons .search-box");

let pass = document.getElementById("pass");
let showPassword = document.getElementById("show-password");

let signInModal = document.getElementById("sign-in-modal");
let signInBtn = document.getElementById("sign-in");

let signUpModal = document.getElementById("sign-up-modal");
let signUpBtn = document.getElementById("sign-up");

let closeIn = document.getElementById("close-in");
let closeUp = document.getElementById("close-up");

let up = document.querySelector(".up");

menu.addEventListener("click", () => mainNav.classList.toggle("show"));

lis.forEach((li) => {
  li.addEventListener("click", () => mainNav.classList.remove("show"));
});

iconSign.addEventListener("click", () => dispalyBlock(signBox));

iconSearch.addEventListener("click", () => dispalyBlock(searchBox));

function dispalyBlock(elt) {
  elt.style.display = elt.style.display === "none" ? "block" : "none";
}

window.onscroll = () => {
  up.style.display = this.scrollY >= 700 ? "block" : "none";
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavor: "smooth",
  });
};

signInBtn.onclick = () => (signInModal.style.top = "0");
signUpBtn.onclick = () => (signUpModal.style.top = "0");

closeIn.onclick = () => (signInModal.style.top = "-100%");
closeUp.onclick = () => (signUpModal.style.top = "-100%");

window.onclick = (e) => {
  if (e.target == signInModal) {
    signInModal.style.top = "-100%";
  }
  if (e.target == signUpModal) {
    signUpModal.style.top = "-100%";
  }
};

showPassword.addEventListener("click", function (e) {
  if (pass.type === "password") {
    pass.type = "text";
    e.currentTarget.children[0].style.display = "none";
    e.currentTarget.children[1].style.display = "block";
  } else {
    pass.type = "password";
    e.currentTarget.children[0].style.display = "block";
    e.currentTarget.children[1].style.display = "none";
  }
});
