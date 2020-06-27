import Form from './form';

$(() => {
  const $form = $('.js-form');
  $form.each((index, item) => {
    new Form($(item));
  });
});
