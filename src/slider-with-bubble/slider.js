$( function() {
    $( ".slider" ).each(function() {
        $( this ).slider({
            value: $( this ).data("value"),
            classes: {
            "ui-slider-handle": "slider__handle slider__handle--orange"
            },
            create: function() {
                $( this ).find(".slider__handle").html( "<span class='slider__buble'>" + $( this ).slider( "value" ) + "</span>");
            },
            slide: function( event, ui ) {
                $( this ).find(".slider__handle").html( "<span class='slider__buble'>" + ui.value  + "</span>");
            }
        });
      });
});


