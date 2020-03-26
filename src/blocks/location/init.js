import Location from './location';

$(() => {
  const $location = $('.js-location');
  $location.each((index, item) => {
    new Location($(item));
  });
});
