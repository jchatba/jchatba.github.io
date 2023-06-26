window.addEventListener('load', function() {
    var images = document.getElementsByClassName('gallery img');
    for (var i = 0; i < images.length; i++) {
        images[i].style.width = '200px';
        images[i].style.height = '150px';
    }
});
