let menu = document.querySelector("header nav .menu");
let mainNav = document.querySelector("header nav .main-nav");
let lis = document.querySelectorAll("header nav .main-nav li a");

let signBox = document.querySelector("header nav .icons .sign-box ul");
let iconSign = document.querySelector("header nav .icons .sign-box i");

let searchBox = document.querySelector("header nav .icons .search-box .form");
let iconSearch = document.querySelector("header nav .icons .search-box i");

let up = document.querySelector(".up");

menu.addEventListener("click", () => mainNav.classList.toggle("show"));

lis.forEach((li) => {
  li.addEventListener("click", () => mainNav.classList.remove("show"));
});

iconSign.addEventListener("click", () => dispalyBlock(signBox));

iconSearch.addEventListener("click", () => dispalyBlock(searchBox));

function dispalyBlock(elt) {
  if (elt.style.display === "none") {
    elt.style.display = "block";
  } else {
    elt.style.display = "none";
  }
}

window.onscroll = function () {
  if (this.scrollY >= 700) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavor: "smooth",
  });
};
