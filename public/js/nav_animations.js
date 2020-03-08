function navAnimate(name, animation, direction, tieDirection, opacity) {
    // $("#menu" + name).css("transform", 'translateX(100%)');
    // $("#menu" + name).css("transform", 'translateX(100%)');
    // $("#menu" + name).css("transform", 'translateX(100%)');


    $('#mf-tie').playKeyframe({
        name: 'tieRotation',
        duration: "2000ms",
        delay: "0ms",
        timingFunction: "ease",
        direction: tieDirection
    });

    if(direction == "normal"){        
        $('#menu0' + name).playKeyframe({
            name: 'navBarAnimForward',
            duration: "1000ms",
            delay: "0ms",
            timingFunction: "ease",
            direction: "normal"
        });
        $('#menu1' + name).playKeyframe({
            name: 'navBarAnimForward',
            duration: "1000ms",
            delay: "500ms",
            timingFunction: "ease",
            direction: "normal"
        });
        $('#menu2' + name).playKeyframe({
            name: 'navBarAnimForward',
            duration: "1000ms",
            delay: "1000ms",
            timingFunction: "ease",
            direction: "normal"
        });
    }else{
        $('#menu0' + name).playKeyframe({
            name: 'navBarAnimReverse',
            duration: "1000ms",
            delay: "0ms",
            timingFunction: "ease",
            direction: "normal"
        });
        $('#menu1' + name).playKeyframe({
            name: 'navBarAnimReverse',
            duration: "1000ms",
            delay: "500ms",
            timingFunction: "ease",
            direction: "normal"
        });
        $('#menu2' + name).playKeyframe({
            name: 'navBarAnimReverse',
            duration: "1000ms",
            delay: "1000ms",
            timingFunction: "ease",
            direction: "normal"
        });
    }


    $("#menu0" + name).css("opacity", opacity);
    $("#menu1" + name).css("opacity", opacity);
    $("#menu2" + name).css("opacity", opacity);

}

function navAnimateSingle(newName, prevName, animation, direction, opacity, image) {


    $("#menu" + prevName).css("opacity", opacity);
    $("#menu" + prevName).css("transform", 'translateX(0)');

    $('#menu' + prevName + "> img").attr("src", image);
    $('#menu' + prevName).attr("id", "menu" + newName);
    $('#menu' + newName).playKeyframe({
        name: animation,
        duration: "1000ms",
        delay: "0ms",
        timingFunction: "ease",
        direction: direction
    });


}
$.keyframe.define([{
    name: 'navBarAnimForward',
    from: {
        'transform': 'translateX(100%)',
        'opacity': '0'
    },
    to: {
        'transform': 'translateX(0px)',
        'opacity': '1'
    }
}, {
    name: 'navBarAnimReverse',
    from: {
        'transform': 'translateX(0px)',
        'opacity': '1'
    },
    to: {
        'transform': 'translateX(100%)',
        'opacity': '0'

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
    name: 'tieFirstRotation2',
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


        navAnimate('f', 'navBarAnim', 'reverse', 'normal', "1");
        setTimeout(function () {
            console.log('me')
            navAnimateSingle("0m", "0f", "navBarAnimForward", "normal", "0", "/images/svg/home.svg");

        }, 1000);
        setTimeout(function () {
            navAnimateSingle("1m", "1f", "navBarAnimForward", "normal", "0", "/images/svg/blog_m.svg");

        }, 1500);
        setTimeout(function () {
            navAnimateSingle("2m", "2f", "navBarAnimForward", "normal", "0", "/images/svg/about_m.svg");

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

        navAnimate('m', 'navBarAnim', 'reverse', 'reverse', "1");

        setTimeout(function () {
            navAnimateSingle("0f", "0m", "navBarAnimForward", "normal", "0", "/images/svg/home.svg");
        }, 1000);
        setTimeout(function () {
            navAnimateSingle("1f", "1m", "navBarAnimForward", "normal", "0", "/images/svg/blog_f.svg");
        }, 1500);
        setTimeout(function () {
            navAnimateSingle("2f", "2m", "navBarAnimForward", "normal", "0", "/images/svg/about_f.svg");

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