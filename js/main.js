/*
Copyright (c) 2017
[Custom JS Script]
Theme Name : Modrenmic Landing Page
Version    : 1.0
Author     : UiSuMo Team
Author URI : https://uisumo.com
Support    : uisumo@gmail.com
*/
/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    /* Page Pre Loading */
    $(window).load(function () { // makes sure the whole site is loaded
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(250).fadeOut("slow"); // will fade out the white DIV that covers the website.
    });
    /* end Page Pre Loading */
    //Initiat WOW JS
    new WOW().init();
    //Smooth Scroll
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]').not('[href="#0"]').click(function (event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        }
                        else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    /* Theme color change*/
    var theme_settings = $(".theme-settings").find(".theme-color");
    theme_settings.on('click', function () {
        var val = $(this).attr('data-color');
        $('#style_theme').attr('href', 'css/' + val + '.css');
        console.log(val);
        theme_settings.removeClass('theme-active');
        theme_settings.addClass('theme-active');
        return false;
    });
    $(".theme-click").on('click', function () {
        $("#switcher").toggleClass("active");
        return false;
    });
    /*Scroll To Top*/
    if ($('.back-to-top').length) {
        var scrollTrigger = 1000, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                }
                else {
                    $('.back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    //scrolls down
    //Partner Slider
    if ($('.screenshot-slider').length) {
        $(".screenshot-slider").owlCarousel({
            items: 2
            , autoplay: true
            , nav: false
            , dots: false
            , responsive: {
                0: {
                    items: 1
                    , dots: true
                , }
                , 600: {
                    items: 1
                    , dots: true
                }
                , 992: {
                    items: 2
                }
                , 1000: {
                    items: 2
                }
                , 1200: {
                    items: 2
                }
            }
        });
    }
    /*event slider*/
    /* Partner Slider*/
    if ($('.mn-slider-events').length) {
        $(".mn-slider-events").owlCarousel({
            items: 4
            , autoplay: true
            , nav: false
            , dots: false
            , responsive: {
                0: {
                    items: 1
                    , dots: true
                , }
                , 600: {
                    items: 2
                    , dots: true
                }
                , 992: {
                    items: 3
                }
                , 1000: {
                    items: 3
                }
                , 1200: {
                    items: 4
                }
            }
        });
    }
    /*magnific popup*/
    $('.popup-gallery').magnificPopup({
        delegate: 'a'
        , type: 'image'
        , tLoading: 'Loading image #%curr%...'
        , mainClass: 'mfp-img-mobile'
        , gallery: {
            enabled: true
            , navigateByImgClick: true
            , preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
        , image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            , titleSrc: function (item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
    /*Offcanvas*/
    $(".navbar-nav").clone().prependTo("#off-canvas");
    $(function () {
        $(document).trigger("enhance");
    });
});
/*Lightbox gallery*/
$('body').on('mouseenter mouseleave', '.dropdown', function (e) {
    var _d = $(e.target).closest('.dropdown');
    _d.addClass('show');
    setTimeout(function () {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
    }, 300);
    /* google map*/
});