$(function () {

    $(".agola-dark").click(function () {

        if ($('ul.pages li.background.background').eq(0).hasClass("current")) {
            return false;
        } else {
            $('ul.pages li.background').css({
                "opacity": "0",
                "z-index": "0"
            });
            $('.current').is(function () {
                $(this).removeClass("current");
                $(this).css("opacity", "1");
            });
            $('ul.pages li.background').eq(0).addClass('current').css("opacity", "1");
        }
    });

    $(".agola-white").click(function () {
        if ($("ul.pages li.background:eq(-3),ul.pages li.background:eq(-2),ul.pages li.background:eq(-1)").hasClass('current')) {

            if ($('ul.pages li.background').eq(1).hasClass("current")) {
                return false;
            } else {
                $('ul.pages li.background').css({
                    "opacity": "0",
                    "z-index": "0"
                });
                $('.current').is(function () {
                    $(this).removeClass("current");
                    $(this).css("opacity", "1");
                });
                $('ul.pages li.background').eq(1).addClass('current').css("opacity", "1");
            }

        } else {

            if ($('ul.pages li.background').eq(1).hasClass("current")) {
                return false;
            } else {
                $('ul.pages li.background').css({
                    "opacity": "0",
                    "z-index": "0"
                });
                $('.current').is(function () {
                    $(this).removeClass("current");
                    $(this).css("opacity", "1");
                });
                $('ul.pages li.background').eq(1).addClass('current').css("opacity", "1");
            }
        }
    });

    $(".agola-green").click(function () {
        if ($("ul.pages li.background:eq(-2),ul.pages li.background:eq(-1)").hasClass('current')) {

            if ($('ul.pages li.background').eq(2).hasClass("current")) {
                return false;
            } else {
                $('ul.pages li.background').css({
                    "opacity": "0",
                    "z-index": "0"
                });
                $('.current').is(function () {
                    $(this).removeClass("current");
                    $(this).css("opacity", "1");
                });
                $('ul.pages li.background').eq(2).addClass('current').css("opacity", "1");
            }

        } else {

            if ($('ul.pages li.background').eq(2).hasClass("current")) {
                return false;
            } else {
                $('ul.pages li.background').css({
                    "opacity": "0",
                    "z-index": "0"
                });
                $('.current').is(function () {
                    $(this).removeClass("current");
                    $(this).css("opacity", "1");
                });
                $('ul.pages li.background').eq(2).addClass('current').css("opacity", "1");
            }
        }
    });

    $(".agola-light").click(function () {
        if ($("ul.pages li.background:eq(-1)").hasClass('current')) {

            if ($('ul.pages li.background').eq(3).hasClass("current")) {
                return false;
            } else {
                $('ul.pages li.background').css({
                    "opacity": "0",
                    "z-index": "0"
                });
                $('.current').is(function () {
                    $(this).removeClass("current");
                    $(this).css("opacity", "1");
                });
                $('ul.pages li.background').eq(3).addClass('current').css("opacity", "1");
            }

        } else {

            if ($('ul.pages li.background').eq(3).hasClass("current")) {
                return false;
            } else {
                $('ul.pages li.background').css({
                    "opacity": "0",
                    "z-index": "0"
                });
                $('.current').is(function () {
                    $(this).removeClass("current");
                    $(this).css("opacity", "1");
                });
                $('ul.pages li.background').eq(3).addClass('current').css("opacity", "1");
            }
        }
    });

    $(".agola-nimbus").click(function () {
        if ($('ul.pages li.background').eq(4).hasClass("current")) {
            return false;
        } else {
            $('ul.pages li.background').css({
                "opacity": "0",
                "z-index": "0"
            });
            $('.current').is(function () {
                $(this).removeClass("current");
                $(this).css("opacity", "1");

            });
            $('ul.pages li.background').eq(4).addClass('current').css("opacity", "1");
        }
    });
});