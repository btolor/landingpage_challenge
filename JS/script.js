$(document).ready(function () {
    
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
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

    $(".mobile-menu").children().click(function () {
        $("#open-mobile-menu").css("display", "block");
        $("#close-mobile-menu").css("display", "none");
        $("#mobile-menu").slideUp();
    });

    $("#logo-text").click(function () {
        $("#open-mobile-menu").css("display", "block");
        $("#close-mobile-menu").css("display", "none");
        $("#mobile-menu").slideUp();
    });

    // Header Change Function On Scroll...
    $(window).scroll(function () {
        // Header if window is scrolled down...
        if ($(this).scrollTop() > 70) {
            $("header").css("background", "#241d7d");
            $("#header-container").css("padding", "20px 0 10px");
            $("#green").removeClass("scrolled");
            $("#purple").addClass("scrolled");
            $("#logo-text").css("color", "white");
            $(".menu-text").css("color", "white");
            $(".enroll").css({"border-color":"#60b4a1"});
            $("#open-mobile-menu").css("color", "white");
            $("#close-mobile-menu").css("color", "white");
            // Hover effect for the logo
            $("#logo-text").hover(function () {
                // over
                $("#logo-text").css("color", "#edd38c");
            }, function () {
                // out
                $("#logo-text").css("color", "white");
            }
            );
            // Hover effect for the menu items
            $(".menu-text").hover(function () {
                // over
                $(this).css("color", "#edd38c");
            }, function () {
                // out
                $(this).css("color", "white");
            }
            );

            // Hover effect for enroll btn
            $(".enroll").hover(function () {
                // over
                $(".enroll").css("background", "#60b4a1 ");
            }, function () {
                // out
                $(".enroll").css({"color": "white","background":"transparent","border-color":"#60b4a1"});
            }
            );

            // Hover effect for the open-mobile-menu-icon
            $("#open-mobile-menu").hover(function () {
                // over
                $("#open-mobile-menu").css("color", "#edd38c");
            }, function () {
                // out
                $("#open-mobile-menu").css("color", "white");
            }
            );

            // Hover effect for the close-mobile-menu-icon
            $("#close-mobile-menu").hover(function () {
                // over
                $("#close-mobile-menu").css("color", "#edd38c");
            }, function () {
                // out
                $("#close-mobile-menu").css("color", "white");
            }
            );

            // hover effect for mobile menu...
            $("#mobile-menu").find('a').hover(function () {
                // over
                $(this).css({"color": "#edd38c","background":"#5680e9","border-color":"#edd38c"});
            }, function () {
                // out
                $(this).css({"color": "white","background":"#2c2798","border-color":"white"});
            }
            );
        }
        // Header whwn window is scrolled to the top...
        if ($(this).scrollTop() < 70) {
            $("header").css("background", "transparent");
            $("#header-container").css("padding", "40px 0 20px");
            $("#purple").removeClass("scrolled");
            $("#green").addClass("scrolled");
            $("#logo-text").css("color", "#2c2798");
            $(".menu-text").css("color", "#2c2798");
            $(".enroll").css({"border-color":"#2c2798"});
            $("#open-mobile-menu").css("color", "#2c2798");
            $("#close-mobile-menu").css("color", "#2c2798");
            // Hover effect for the logo
            $("#logo-text").hover(function () {
                // over
                $("#logo-text").css("color", "#60b4a1");
            }, function () {
                // out
                $("#logo-text").css("color", "#2c2798");
            }
            );
            // Hover effect for the menu items
            $(".menu-text").hover(function () {
                // over
                $(this).css("color", "#60b4a1");
            }, function () {
                // out
                $(this).css("color", "#2c2798");
            }
            );

            // Hover effect for enroll btn
            $(".enroll").hover(function () {
                // over
                $(".enroll").css({"background": "#2c2798","border-color":"#60b4a1"});
            }, function () {
                // out
                $(".enroll").css({"color": "#2c2798","background":"transparent","border-color":"#2c2798"});
            }
            );

            // Hover effect for the open-mobile-menu-icon
            $("#open-mobile-menu").hover(function () {
                // over
                $("#open-mobile-menu").css("color", "#60b4a1");
            }, function () {
                // out
                $("#open-mobile-menu").css("color", "#2c2798");
            }
            );

            // Hover effect for the close-mobile-menu-icon
            $("#close-mobile-menu").hover(function () {
                // over
                $("#close-mobile-menu").css("color", "#60b4a1");
            }, function () {
                // out
                $("#close-mobile-menu").css("color", "#2c2798");
            }
            );

            // hover effect for mobile menu...
            $("#mobile-menu").find('a').hover(function () {
                // over
                $(this).css({"color": "#edd38c","background":"#5680e9","border-color":"#edd38c"});
            }, function () {
                // out
                $(this).css({"color": "white","background":"#2c2798","border-color":"white"});
            }
            );
        }
    });



});