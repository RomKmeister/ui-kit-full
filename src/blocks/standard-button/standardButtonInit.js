import StandardButton from './StandardButton';

$(() => {
  const $button = $('.js-standard-button');

  $button.each((index, item) => {
    new StandardButton($(item))
  });
});

