import DropDown from './DropDown';

$(() => {
  const $dropDown = $('.js-drop-down');
  $dropDown.each((index, item) => {
    new DropDown($(item))
  });
});
