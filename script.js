document.addEventListener("DOMContentLoaded", function () {
  var mainNav = document.getElementById("mainNav");

  // Change styles when scrolled
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      mainNav.classList.add("scrolled");
    } else {
      mainNav.classList.remove("scrolled");
    }
  });
});
