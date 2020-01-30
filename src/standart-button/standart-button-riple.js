;(function($, window, document, undefined) {

    'use strict';
  
    const $ripple = $('.js-button__ripple');
  
    $ripple.on('click.ui.ripple', function(e) {
  
      const $this = $(this);
      const $offset = $this.parent().offset();
      const $circle = $this.find('.button__ripple_circle');
  
      const x = e.pageX - $offset.left;
      const y = e.pageY - $offset.top;
  
      $circle.css({
        top: y + 'px',
        left: x + 'px'
      });
  
      $this.addClass('button__ripple_active');
  
    });
  
    $ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
        $(this).removeClass('button__ripple_active');
    });
  
  })(jQuery, window, document);