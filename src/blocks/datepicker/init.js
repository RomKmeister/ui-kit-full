import Datepicker from './datepicker';


$( () => {
  const $calendar = $('.datepicker');

  $calendar.each((index, item) => {
    new Datepicker($(item))
  });
});
