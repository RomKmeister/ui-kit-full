$( function() {
  $( ".datepicker__calendar").each(function() {
    $(this).datepicker({
      altField: ".datepicker__date",
      dateFormat: "d",
      dayNamesMin: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
      inline: true,
      firstDay: 1,
      showButtonPanel: true,
      showOtherMonths: true,
      constrainInput: true,
    });
  });
});
