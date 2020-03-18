$( function() {
  const $dropDown = $('.js-drop-down__select');
  $dropDown.each(function() {
    $(this).selectmenu({
      width: '100%',
      classes: {
        'ui-selectmenu-menu': 'ui-selectmenu-menu_ui'
      }
    });
  });
});
