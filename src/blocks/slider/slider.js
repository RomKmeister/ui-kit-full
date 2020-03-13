$( function() {
  const $sliderWithScale = $('.js-slider');
  $sliderWithScale.each(function() {
    const $sliderBubble = $(this).find('.js-slider__bubble');
    const $stepSize = ($(this).data('max') - $(this).data('min')) / ($(this).data('step') - 1);
    $(this).slider({
      value: $(this).data('value'),
      min: $(this).data('min'),
      max: $(this).data('max'),
      step: $stepSize,
      range: 'min',
      classes: {
        'ui-slider-range': 'ui-slider-range_' + $(this).data('color')
      },
      create: function() {
        $sliderBubble.text($(this).slider('value'))
      },
      slide: function( event, ui ) {
        $sliderBubble.text(ui.value)
      }
    });
   });
});
