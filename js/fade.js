AOS.init({
  duration: 1200,
})

document.addEventListener('DOMContentLoaded', function () {
  var menuLinks = document.querySelectorAll('#links-menu a');
  var menu = document.getElementById('links-menu');
  var toggleButton = document.getElementById('menu-toggle');

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
