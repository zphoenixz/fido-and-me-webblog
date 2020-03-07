function navAnimate(name, animation, direction, opacity) {
    $("#menu0" + name).css("opacity", opacity);
    $("#menu1" + name).css("opacity", opacity);
    $("#menu2" + name).css("opacity", opacity);

    $('#menu0' + name).playKeyframe({
        name: animation,
        duration: "1000ms",
        delay: "0ms",
        timingFunction: "ease",
        direction: direction
    });
    $('#menu1' + name).playKeyframe({
        name: animation,
        duration: "1000ms",
        delay: "500ms",
        timingFunction: "ease",
        direction: direction
    });
    $('#menu2' + name).playKeyframe({
        name: animation,
        duration: "1000ms",
        delay: "1000ms",
        timingFunction: "ease",
        direction: direction
    });
}

$.keyframe.define({
    name: 'entradaFido',
    from: {
        'transform': 'translateX(100%)',
        'opacity': '0'
    },
    to: {
        'transform': 'translateX(0px)',
        'opacity': '1'
    }
});

navAnimate('f', 'entradaFido', 'normal', "0");


$(".button-title").click(function () {
    $('.f.transform').toggleClass('transform-active-f');
    $('.m.transform').toggleClass('transform-active-m');

    if ($(window).width() < 500) {
        console.log("menor!!!!!!!!!!!!")
    }

    if (!$(".f.transform ").hasClass("transform-active-f")) {

        navAnimate('f', 'entradaFido', 'reverse', "1");

        setTimeout(function () {
            $('#menu0f').attr("id", "menu0m");
            $('#menu0m').playKeyframe({
                name: 'entradaFido',
                duration: "1000ms",
                delay: "50ms",
                timingFunction: "ease",
                direction: 'normal'
            });
        }, 1000);
        setTimeout(function () {
            $('#menu1f').find('img').attr("src", "/images/svg/blog_m.svg");
            $('#menu1f').attr("id", "menu1m");
            $('#menu1m').playKeyframe({
                name: 'entradaFido',
                duration: "1000ms",
                delay: "50ms",
                timingFunction: "ease",
                direction: 'normal'
            });
        }, 1500);
        setTimeout(function () {
            $('#menu2f').find('img').attr("src", "/images/svg/about_m.svg");
            $('#menu2f').attr("id", "menu2m");
            $('#menu2m').playKeyframe({
                name: 'entradaFido',
                duration: "1000ms",
                delay: "50ms",
                timingFunction: "ease",
                direction: 'normal'
            });
        }, 2000);

    } else {
        navAnimate('m', 'entradaFido', 'reverse', "1");

        setTimeout(function () {
            $('#menu0m').attr("id", "menu0f");
            $('#menu0f').playKeyframe({
                name: 'entradaFido',
                duration: "1000ms",
                delay: "50ms",
                timingFunction: "ease",
                direction: 'normal'
            });
        }, 1000);
        setTimeout(function () {
            $('#menu1m').find('img').attr("src", "/images/svg/blog_f.svg");
            $('#menu1m').attr("id", "menu1f");
            $('#menu1f').playKeyframe({
                name: 'entradaFido',
                duration: "1000ms",
                delay: "50ms",
                timingFunction: "ease",
                direction: 'normal'
            });
        }, 1500);
        setTimeout(function () {
            $('#menu2m').find('img').attr("src", "/images/svg/about_f.svg");
            $('#menu2m').attr("id", "menu2f");
            $('#menu2f').playKeyframe({
                name: 'entradaFido',
                duration: "1000ms",
                delay: "50ms",
                timingFunction: "ease",
                direction: 'normal'
            });
        }, 2000);

    }
});