function navAnimate(name, animation, direction, tieDirection, opacity) {
    $("#menu0" + name).css("opacity", opacity);
    $("#menu1" + name).css("opacity", opacity);
    $("#menu2" + name).css("opacity", opacity);

    $('#mf-tie').playKeyframe({
        name: 'tieRotation',
        duration: "2000ms",
        delay: "0ms",
        timingFunction: "ease",
        direction: tieDirection
    });

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

$.keyframe.define([{
    name: 'navBarAnim',
    from: {
        'transform': 'translateX(100%)',
        'opacity': '0'
    },
    to: {
        'transform': 'translateX(0px)',
        'opacity': '1'
    }
}, {
    name: 'tieRotation',
    from: {
        'transform': 'rotate(0deg)',
    },
    to: {
        'transform': 'rotate(900deg)',
    }
}, {
    name: 'tieFirstRotation1',
    '0%': {
        'transform': 'rotate(180deg)'
    },
    '25%': {
        'transform': 'rotate(210deg)'
    },
    '50%': {
        'transform': 'rotate(150deg)'
    },
    '100%': {
        'transform': 'rotate(180deg)'
    }
}, {
    name: 'tieFirstRotation2',
    '0%': {
        'transform': 'rotate(0deg)'
    },
    '25%': {
        'transform': 'rotate(30deg)'
    },
    '50%': {
        'transform': 'rotate(-30deg)'
    },
    '100%': {
        'transform': 'rotate(0deg)'
    }
}, {
    name: 'backgroundChange',
    from: {
        'box-shadow': 'inset 0 0 0 1000px rgba(59, 76, 102, 0.6)',
    },
    to: {
        'box-shadow': 'inset 0 0 0 1000px rgba(42, 58, 59, 0.5)',
        
    }
}]);

navAnimate('f', 'navBarAnim', 'normal', 'normal', "0");

$('#mf-tie').playKeyframe({
    name: 'tieFirstRotation1',
    duration: "1000ms",
    iterationCount: 'infinite',
    delay: "0ms",
    timingFunction: "ease",
    direction: 'normal'
});


$(".button-title").click(function () {
    $('.f.transform').toggleClass('transform-active-f');
    $('.m.transform').toggleClass('transform-active-m');

    // if ($(window).width() < 500) {
    //     console.log("menor!!!!!!!!!!!!")
    // }

    if (!$(".f.transform ").hasClass("transform-active-f")) {
        $('section#home_f').css("box-shadow", 'inset 0 0 0 1000px rgba(59, 76, 102, 0.6)');
        $('section#home_f').playKeyframe({
            name: 'backgroundChange',
            duration: "1000ms",
            delay: "50ms",
            timingFunction: "ease",
            direction: 'normal'
        });

        navAnimate('f', 'navBarAnim', 'reverse', 'reverse', "1");

        setTimeout(function () {
            $('#menu0f').attr("id", "menu0m");
            $('#menu0m').playKeyframe({
                name: 'navBarAnim',
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
                name: 'navBarAnim',
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
                name: 'navBarAnim',
                duration: "1000ms",
                delay: "50ms",
                timingFunction: "ease",
                direction: 'normal'
            });
            $('#mf-tie').playKeyframe({
                name: 'tieFirstRotation2',
                duration: "1000ms",
                iterationCount: 'infinite',
                delay: "0ms",
                timingFunction: "ease",
                direction: 'reverse'
            });
        }, 2000);

    } else {
        $('section#home_f').css("box-shadow", 'inset 0 0 0 1000px rgba(42, 58, 59, 0.5)');
        $('section#home_f').playKeyframe({
            name: 'backgroundChange',
            duration: "1000ms",
            delay: "50ms",
            timingFunction: "ease",
            direction: 'reverse'
        });

        navAnimate('m', 'navBarAnim', 'reverse', 'normal', "1");

        setTimeout(function () {
            $('#menu0m').attr("id", "menu0f");
            $('#menu0f').playKeyframe({
                name: 'navBarAnim',
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
                name: 'navBarAnim',
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
                name: 'navBarAnim',
                duration: "1000ms",
                delay: "50ms",
                timingFunction: "ease",
                direction: 'normal'
            });

            $('#mf-tie').playKeyframe({
                name: 'tieFirstRotation1',
                duration: "1000ms",
                iterationCount: 'infinite',
                delay: "0ms",
                timingFunction: "ease",
                direction: 'normal'
            });
        }, 2000);

    }
});