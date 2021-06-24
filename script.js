//Strechy nav
const navTrigger = document.querySelector(".navigation");
const nav = document.querySelector(".stretchy-nav");

// Added a function to remove # when the navigation bar is clicked
function reveal(e) {
  e.preventDefault();
  nav.classList.toggle("nav-is-visible");
}
navTrigger.onclick = reveal;

const ahref = document.querySelector(".links").children;
const allSections = document.querySelector(".all-sections").children;
const aboutButton = document.querySelector(".aboutButton");
const portfolioButton = document.querySelector(".portfolioButton");

for (let i = 0; i < ahref.length; i++) {
  const a = ahref[i].querySelector("a");
  a.addEventListener("click", function () {
    section(this);
    // remove active class from all lists
    for (let j = 0; j < ahref.length; j++) {
      ahref[j].querySelector("a").classList.remove("active");
    }
    // add class active to clicked links
    this.classList.add("active");
  });
}
aboutButton.addEventListener("click", function () {
  section(this);
  updateNav(this);
});
portfolioButton.addEventListener("click", function () {
  section(this);
  updateNav(this);
});

// Update active nav when clicked about and portfolio btn
function updateNav(element) {
  for (let j = 0; j < ahref.length; j++) {
    ahref[j].querySelector("a").classList.remove("active");
    const target2 = element.getAttribute("href").split("#")[1];
    if (
      target2 == ahref[j].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      ahref[j].querySelector("a").classList.add("active");
    }
  }
}

function section(element) {
  // remove active class from all sections
  for (let j = 0; j < allSections.length; j++) {
    allSections[j].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

//lightbox
const portfolioContainer = document.querySelector(".portfolio");
const portfolioItems = document.querySelector(".portfolio-items").children;
const lightbox = document.querySelector(".lightbox");
const imageFormatContainer = lightbox.querySelector(".image-format");
let currentItem;

for (let i = 0; i < portfolioItems.length; i++) {
  portfolioItems[i].addEventListener("click", function () {
    console.log(this);
    portfolioContainer.classList.add("lightbox-is-visible");
    lightbox.classList.remove("hidden");
    lightbox.classList.add("lightbox-is-visible");
    currentItem = i;
    changeProjectInfo();
    imageFormat();
  });
}

function imageFormat() {
  const imgContainer = portfolioItems[currentItem].querySelector(".img");
  const imgSrc = imgContainer.querySelector("img").getAttribute("src");

  imageFormatContainer.classList.remove("hidden");
  imageFormatContainer.querySelector("img").src = imgSrc;
}

// change Project Info lightbox
const project = document.querySelector("#project");
const client = document.querySelector("#client");
const duration = document.querySelector("#duration");
const technologies = document.querySelector("#technologies");

function changeProjectInfo() {
  const projectInfo =
    portfolioItems[currentItem].querySelector(".project-info");
  project.innerHTML = projectInfo.querySelector(".project").innerHTML;
  client.innerHTML = projectInfo.querySelector(".client").innerHTML;
  duration.innerHTML = projectInfo.querySelector(".duration").innerHTML;
  technologies.innerHTML = projectInfo.querySelector(".technologies").innerHTML;
}
//close Lightbox
const portfolioOverlay = document.querySelector(".portfolio-overlay");
const closeLightbox = document.querySelector(".close-lightbox");
window.onclick = function (event) {
  if (lightbox.classList.contains("lightbox-is-visible")) {
    if (
      event.target == portfolioOverlay ||
      event.target == closeLightbox ||
      event.target == closeLightbox.querySelector("span")
    ) {
      portfolioContainer.classList.remove("lightbox-is-visible");
      lightbox.classList.remove("lightbox-is-visible");
    }
  }
  //hide stretchy nav when clicked anywhere outside of navTrigger
  if (
    event.target != navTrigger &&
    event.target != navTrigger.querySelector("span")
  ) {
    nav.classList.remove("nav-is-visible");
  }
};
