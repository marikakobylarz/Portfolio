import $ from "jquery";


$(function () {
    $(".btnUp").click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 200);
    });
});

