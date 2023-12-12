const bar = document.querySelector(".bars");
const nav = document.querySelector(".ul-screen");
const navLinks = document.querySelectorAll("nav ul a");
const activepage = window.location.pathname;

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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entries);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add("show-right");
    } else {
      if (entry.isIntersecting) {
        entry.target.classList.remove("show");
        entry.target.classList.remove("show-right");
      }
    }
  });
});
