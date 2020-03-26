import StandardButton from './standardButton';

$(() => {
  const $button = $('.js-standard-button');

  $button.each((index, item) => {
    new StandardButton($(item))
  });
});

