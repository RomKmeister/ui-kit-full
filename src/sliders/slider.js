$( function() {
    var handle = $( "#slider__handle" );
    $( ".slider" ).slider({
            value: 40
        },
        {
        classes: {
            "ui-slider-handle": "slider__handle slider__handle--orange"
        },
        create: function() {
        handle.html( "<span class='slider__buble'>" + $( this ).slider( "value" ));
        },
        slide: function( event, ui ) {
        handle.html( "<span class='slider__buble'>" + ui.value);
        }
    })
});

$( function() {
    $( ".slider-with-scale" ).slider({
            value: 80
        },
        {
        classes: {
            "ui-slider-handle": "sslider-with-scale__handle slider-with-scale__handle--green"
        }
    });
});
