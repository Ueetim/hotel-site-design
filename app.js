// FOR SCRIPTS WORKING ON ALL PAGES

// back to top button
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset; //pageYOffset returns the current scroll position
  const topBtn = document.querySelector(".top-btn");
  const nav = document.querySelector(".nav");
  const navLink = document.querySelectorAll(".nav-link")
  const navHeight = nav.getBoundingClientRect().height; //returns the height of the item

  if (scrollHeight > 300) {
    topBtn.classList.add("btn-show");
  } else {
    topBtn.classList.remove("btn-show");
  }

  // make nav stick on scroll
  if (scrollHeight > navHeight) {
      nav.classList.add("nav-sticky")
      navLink.forEach(function(link) {
        link.classList.add("link-black")
      })
  } else {
      nav.classList.remove("nav-sticky")
      navLink.forEach(function(link) {
        link.classList.remove("link-black")
      })
  }
});

// get footer date automatically
const date = document.querySelector(".date");
date.textContent = new Date().getFullYear();
