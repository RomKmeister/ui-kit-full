class Datepicker {
  constructor() {
    this.show();
  }

  show() {
    this._findElements();
    this.$calendar.datepicker({
      altField: '.js-datepicker__date',
      dateFormat: 'd',
      dayNamesMin: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
      inline: true,
      firstDay: 1,
      showOtherMonths: true,
    });

    this.$todayButton.on(`click`, this._handleTodayButtonClick.bind(this));
  }

  _findElements() {
    this.$calendar = $( '.js-datepicker__calendar');
    this.$todayButton = $( '.js-datepicker__button');
  }

  _handleTodayButtonClick() {
    this.$calendar.datepicker('setDate', new Date());
  }
}

$( () => {
  const $calendar = $('.datepicker');

  $calendar.each(() => {
    new Datepicker();
  });
});
