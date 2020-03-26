import DropDown from './Dropdown';

$(() => {
  const $dropDown = $('.js-drop-down');
  $dropDown.each((index, item) => {
    new DropDown($(item))
  });
});
