import Map from './map';

$(() => {
  const $map = $('.js-map');
  $map.each((index, item) => {
    new Map($(item));
  });
});
