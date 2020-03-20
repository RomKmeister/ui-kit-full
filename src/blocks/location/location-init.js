import Location from './Location';

$(() => {
  const $location = $('.js-location');
  $location.each((index, item) => {
    new Location($(item))
  });
});