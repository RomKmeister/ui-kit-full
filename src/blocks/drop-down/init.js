import DropDown from './dropdown';

$(() => {
  const $dropDown = $('.js-drop-down');
  $dropDown.each((index, item) => {
    new DropDown($(item))
  });
});
