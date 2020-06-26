import Form from './form';

$(() => {
  const $dropDown = $('.js-form');
  $dropDown.each((index, item) => {
    new Form($(item));
  });
});
