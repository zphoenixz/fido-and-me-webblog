$.keyframe.define({
    name: 'entradaFido',
    from: {
        'transform': 'translateX(120px)',
        'opacity': '0'
    },
    to: {
        'transform': 'translateX(0px)',
        'opacity': '1'
    },
    complete: function () {}
});



$('#menu0f').playKeyframe({
    name: 'entradaFido',
    duration: "2s",
    delay: "0s",
    timingFunction: "ease",
    direction: 'normal'
});
$('#menu1f').playKeyframe({
    name: 'entradaFido',
    duration: "2s",
    delay: "1s",
    timingFunction: "ease",
    direction: 'normal'
});
$('#menu2f').playKeyframe({
    name: 'entradaFido',
    duration: "2s",
    delay: "2s",
    timingFunction: "ease",
    direction: 'normal'
});


$(".button-title").click(function () {
    $('.f.transform').toggleClass('transform-active-f');
    $('.m.transform').toggleClass('transform-active-m');

    if (!$(".f.transform ").hasClass("transform-active-f")) {
        $("#menu0f").css("opacity", "1");
        $("#menu1f").css("opacity", "1");
        $("#menu2f").css("opacity", "1");
        
        $('#menu0f').playKeyframe({
            name: 'entradaFido',
            duration: "2s",
            delay: "0s",
            timingFunction: "ease",
            direction: 'reverse'
        });
        $('#menu1f').playKeyframe({
            name: 'entradaFido',
            duration: "2s",
            delay: "1s",
            timingFunction: "ease",
            direction: 'reverse'
        });
        $('#menu2f').playKeyframe({
            name: 'entradaFido',
            duration: "2s",
            delay: "2s",
            timingFunction: "ease",
            direction: 'reverse'
        });

    } else {
        $("#menu0f").css("opacity", "0");
        $("#menu1f").css("opacity", "0");
        $("#menu2f").css("opacity", "0");

        $('#menu0f').playKeyframe({
            name: 'entradaFido',
            duration: "2s",
            delay: "0s",
            timingFunction: "ease",
            direction: 'normal'
        });
        $('#menu1f').playKeyframe({
            name: 'entradaFido',
            duration: "2s",
            delay: "1s",
            timingFunction: "ease",
            direction: 'normal'
        });
        $('#menu2f').playKeyframe({
            name: 'entradaFido',
            duration: "2s",
            delay: "2s",
            timingFunction: "ease",
            direction: 'normal'
        });
    }
});