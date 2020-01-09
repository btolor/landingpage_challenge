$(document).ready(function () {
    // Mobile-Device-Nav-Menu
    $("#open-mobile-menu").click(function () {
        $("#open-mobile-menu").css("display", "none");
        $("#close-mobile-menu").css("display", "flex");
        $("#mobile-menu").css("display", "flex").hide().slideDown(300);
    });
    $("#close-mobile-menu").click(function () {
        $("#open-mobile-menu").css("display", "block");
        $("#close-mobile-menu").css("display", "none");
        $("#mobile-menu").slideUp();
    });

    // Header Change Function On Scroll...
    $(window).scroll(function () {
        // Header if window is scrolled down...
        if ($(this).scrollTop() > 70) {
            $("header").css("background", "black");
            $("#header-container").css("padding", "20px 0 10px");
            $("#logo-text").css("color", "white");
            $(".menu-text").css("color", "white");
            $("#open-mobile-menu").css("color", "white");
            $("#close-mobile-menu").css("color", "white");
            // Hover effect for the logo
            $("#logo-text").hover(function () {
                // over
                $("#logo-text").css("color", "#0099ff");
            }, function () {
                // out
                $("#logo-text").css("color", "white");
            }
            );
            // Hover effect for the menu items
            $(".menu-text").hover(function () {
                // over
                $(this).css("color", "#0099ff");
            }, function () {
                // out
                $(this).css("color", "white");
            }
            );

            // Hover effect for the open-mobile-menu-icon
            $("#open-mobile-menu").hover(function () {
                // over
                $("#open-mobile-menu").css("color", "#0099ff");
            }, function () {
                // out
                $("#open-mobile-menu").css("color", "white");
            }
            );

            // Hover effect for the close-mobile-menu-icon
            $("#close-mobile-menu").hover(function () {
                // over
                $("#close-mobile-menu").css("color", "#0099ff");
            }, function () {
                // out
                $("#close-mobile-menu").css("color", "white");
            }
            );


        }
        // Header whwn window is scrolled to the top...
        if ($(this).scrollTop() < 70) {
            $("header").css("background", "transparent");
            $("#header-container").css("padding", "40px 0 20px");
            $("#logo-text").css("color", "#5b04bf");
            $(".menu-text").css("color", "#5b04bf");
            $("#open-mobile-menu").css("color", "#5b04bf");
            $("#close-mobile-menu").css("color", "#5b04bf");
            // Hover effect for the logo
            $("#logo-text").hover(function () {
                // over
                $("#logo-text").css("color", "#0099ff");
            }, function () {
                // out
                $("#logo-text").css("color", "#5b04bf");
            }
            );
            // Hover effect for the menu items
            $(".menu-text").hover(function () {
                // over
                $(this).css("color", "#0099ff");
            }, function () {
                // out
                $(this).css("color", "#5b04bf");
            }
            );

            // Hover effect for the open-mobile-menu-icon
            $("#open-mobile-menu").hover(function () {
                // over
                $("#open-mobile-menu").css("color", "#0099ff");
            }, function () {
                // out
                $("#open-mobile-menu").css("color", "#5b04bf");
            }
            );

            // Hover effect for the close-mobile-menu-icon
            $("#close-mobile-menu").hover(function () {
                // over
                $("#close-mobile-menu").css("color", "#0099ff");
            }, function () {
                // out
                $("#close-mobile-menu").css("color", "#5b04bf");
            }
            );
        }
    });


    // $("#mobile-nav").children().click(function () {
    //     $("#open-mobile-menu").css("display", "block");-
    //     $("#close-mobile-menu").css("display", "none");
    //     $("#mobile-nav").slideUp();
    // });


});