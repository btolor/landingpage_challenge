$(document).ready(function () {
            // Mobile-Device-Nav-Menu
            $("#open-mobile-menu").click(function () {
                $("#open-mobile-menu").css("display", "none");
                $("#close-mobile-menu").css("display", "block");
                $("#mobile-menu").css("display", "flex").hide().slideDown(300);
            });
            $("#close-mobile-menu").click(function () {
                $("#open-mobile-menu").css("display", "block");
                $("#close-mobile-menu").css("display", "none");
                $("#mobile-menu").slideUp();
            });

            $("#mobile-nav").children().click(function () {
                $("#open-mobile-menu").css("display", "block");-
                $("#close-mobile-menu").css("display", "none");
                $("#mobile-nav").slideUp();
            });
        });