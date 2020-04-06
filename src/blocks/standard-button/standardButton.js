class StandardButton {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this._findElements();
    this.$ripple.on('click', this._handleStandardButtonClick.bind(this));
    this.$ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', this._handleStandardButtonAnimationend);
  }

  _findElements() {
    this.$ripple = this.element.find('.js-standard-button__ripple');
    this.$circle = this.element.find('.standard-button__ripple_circle');
  }

  _handleStandardButtonClick(event) {
    const $this = $(event.currentTarget);
    const $offset = $this.parent().offset();

    const x = event.pageX - $offset.left;
    const y = event.pageY - $offset.top;

    this.$circle.css({
      top: `${y} px`,
      left: `${x} px`,
    });

    $this.addClass('standard-button__ripple_active');
  }

  _handleStandardButtonAnimationend(event) {
    $(event.currentTarget).removeClass('standard-button__ripple_active');
  }
}

export default StandardButton;
