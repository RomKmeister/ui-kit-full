$( function() {
    $(".datepicker__calendar").datepicker({
      altField: ".datepicker__date",
      dateFormat: "d",
      dayNamesMin: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
      inline: true,
      firstDay: 1,
      showButtonPanel: true,
      showOtherMonths: true,
      constrainInput: true
    });
  var currentDate = $( ".datepicker__calendar" ).datepicker( "getDate" );
  $(".datepicker__date").text(currentDate);
  
});
