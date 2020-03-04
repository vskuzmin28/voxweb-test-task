import $ from "jquery";
import selectric from "selectric";

$(".menu").click(function(e){
    e.preventDefault();
    $(this).toggleClass("menu_close");
    $(".header").toggleClass("header_mobile");
});

$(".header__overlay").click(function(e){
    e.preventDefault();
    $(".header").removeClass("header_mobile");
    $(".menu").removeClass("menu_close");
});

$(function() {
    $('select').selectric();
});