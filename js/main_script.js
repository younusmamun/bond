/*
* ----------------------------------------------------------------------------------------
 Author       : Design_Dude
 Template Name: Bond Portfolio Template
 Version      : 1.0
* ----------------------------------------------------------------------------------------
*/

(function ($){
    'use strict';

    jQuery(document).ready(function() {




        /*
         * ----------------------------------------------------------------------------------------
         *  PRELODER JS
         * ----------------------------------------------------------------------------------------
         */

        var prealoaderOption = $(window);
        prealoaderOption.on("load", function () {
            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  CHANGE MENU BACKGROUND ON SCROLL DOWN JS
         * ----------------------------------------------------------------------------------------
         */

        $(window).on('scroll', function () {
            var menu_area = $('.menu-area');
            if ($(window).scrollTop() > 80) {
                menu_area.addClass('sticky-menu');
            } else {
                menu_area.removeClass('sticky-menu');
            }
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  NAVIGATION JS
         * ----------------------------------------------------------------------------------------
         */

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH SCROOL JS
         * ----------------------------------------------------------------------------------------
         */

        $('a.smooth_scroll').on("click", function (e) {
            e.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFIC POPUP JS
         * ----------------------------------------------------------------------------------------
         */

        $('.test-popup-link').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
            
        });



         /*
         * ----------------------------------------------------------------------------------------
         *  WOW JS
         * ----------------------------------------------------------------------------------------
         */
         
        new WOW().init();


        /*
         * ----------------------------------------------------------------------------------------
         * FITTERIZER JS
         * ----------------------------------------------------------------------------------------
         */


        $('.filtr-container').filterizr();



        /*
         * ----------------------------------------------------------------------------------------
         *  OWL CAROUSEL ON TESTIMONIAL JS
         * ----------------------------------------------------------------------------------------
         */

        $(".owl-carousel").owlCarousel({
            items: 1,
            autoplay: true,
            loop:true,
            navigation: true,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [992, 2],
            itemsTablet: [767, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
            autoplayHoverPause:true


        });

    });

}) (jQuery);
    
