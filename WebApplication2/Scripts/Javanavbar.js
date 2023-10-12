window.addEventListener('scroll', function () {
    var secondtop = document.querySelector('#second-top');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= 100) { // Điều chỉnh giá trị này để xác định vị trí cuộn tới
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});