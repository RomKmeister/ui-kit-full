import Player from './player';

$(() => {
  const $player = $('.js-player');
  $player.each((index, item) => {
    new Player($(item));
  });
});
