$( function() {
  const $datepickerCalendar = $( '.js-datepicker__calendar');
  $datepickerCalendar.each(function() {
    $(this).datepicker({
      altField: '.js-datepicker__date',
      dateFormat: 'd',
      dayNamesMin: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
      inline: true,
      firstDay: 1,
      showButtonPanel: true,
      showOtherMonths: true,
      constrainInput: true,
    });
  });
});
