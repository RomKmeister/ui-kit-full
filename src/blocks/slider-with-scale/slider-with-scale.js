$( function() {
  const $sliderWithScale = $('.js-slider-with-scale');
  $sliderWithScale.each(function() {
    $(this).slider({
      value: $(this).data('value'),
      min: $(this).data('min'),
      max: $(this).data('max'),
      range: 'min',
      classes: {
        'ui-slider-range': 'slider-with-scale__range_green',
        'ui-slider-handle': 'slider-with-scale__handle slider-with-scale__handle_green'
      }
    });
   });
});

