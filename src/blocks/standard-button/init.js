import StandardButton from './standardbutton';

$(() => {
  const $button = $('.js-standard-button');

  $button.each((index, item) => {
    new StandardButton($(item))
  });
});

