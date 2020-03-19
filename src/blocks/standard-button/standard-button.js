class Ripple {
  constructor() {
    this.run();
  }

  run() {
    this._findElements();
    this.$ripple.on('click', this._handleStandardButtonClick.bind(this) )
    this.$ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', this._handleStandardButtonAnimationend);
  }

  _findElements() {
    this.$ripple = $('.js-standard-button__ripple');
    this.$circle = $('.standard-button__ripple_circle');
  }

  _handleStandardButtonClick(event) {
    const $this = $(event.currentTarget);
    const $offset = $this.parent().offset();

    const x = event.pageX - $offset.left;
    const y = event.pageY - $offset.top;

    this.$circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('standard-button__ripple_active');
  }

  _handleStandardButtonAnimationend(event) {
    $(event.currentTarget).removeClass('standard-button__ripple_active');
  }
}

$(() => {
  const $button = $('.js-standard-button');

  $button.each(() => {
    new Ripple();
  });
});