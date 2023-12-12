const bar = document.querySelector(".bars");
const nav = document.querySelector(".ul-screen");
const navLinks = document.querySelectorAll("nav ul a");
const activepage = window.location.pathname;

// navifgation
bar.addEventListener("click", function () {
  nav.classList.toggle("active");
  /* bar.classList.toggle("active"); */
});

navLinks.forEach((links) => {
  const navlinksPath = new URL(links.href).pathname;

  if (activepage === navlinksPath) {
    links.classList.add("current");
  }
});

// scroll transitions.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add("show-right");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.remove("show-right");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElement1 = document.querySelectorAll(".hidden-right");
hiddenElement1.forEach((el) => observer.observe(el));
