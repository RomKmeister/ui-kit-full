import Datepicker from './Datepicker';


$( () => {
  const $calendar = $('.datepicker');

  $calendar.each((index, item) => {
    new Datepicker($(item))
  });
});
