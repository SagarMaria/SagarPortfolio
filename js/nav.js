$(document).ready(function () {
    var $hamburger = $(".hamburger");
    var $navItem = $(".nav-item");

    $hamburger.click(function () {
        $hamburger.toggleClass("is-active");
    });

    $navItem.click(function () {
        $hamburger.toggleClass("is-active");
    });

    $hamburger.keypress(function (event) {
        if (event.keyCode === 13) {
            $(".hamburger").click();
        }
    });

});