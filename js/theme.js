window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
