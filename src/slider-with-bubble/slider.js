$( function() {
    $( ".slider-with-bubble" ).each(function() {
        $( this ).slider({
            value: $( this ).data("value"),
            min: $( this ).data("min"),
            max: $( this ).data("max"),
            classes: {
            "ui-slider-handle": "slider-with-bubble__handle slider-with-bubble__handle_orange"
            },
            create: function() {
                $( this ).find(".slider-with-bubble__handle").html( "<span class='slider-with-bubble__buble'>" + $( this ).slider( "value" ) + "</span>");
            },
            slide: function( event, ui ) {
                $( this ).find(".slider-with-bubble__handle").html( "<span class='slider-with-bubble__buble'>" + ui.value  + "</span>");
            }
        });
      });
});


