;(function($, window, document, undefined) {

    'use strict';
  
    var $ripple = $('.button__ripple-js');
  
    $ripple.on('click.ui.ripple', function(e) {
  
      var $this = $(this);
      var $offset = $this.parent().offset();
      var $circle = $this.find('.button__ripple-circle');
  
      var x = e.pageX - $offset.left;
      var y = e.pageY - $offset.top;
  
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