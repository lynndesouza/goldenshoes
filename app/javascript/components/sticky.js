function fixPositionOnScroll() {
  const navbar = document.getElementById('navbar-main');
  const sticky = navbar.offsetTop;


  window.addEventListener("scroll", (event) => {
    if (window.pageYOffset >= 1200) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
  });
}

export { fixPositionOnScroll };
