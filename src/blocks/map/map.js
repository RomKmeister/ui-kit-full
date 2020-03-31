/* eslint comma-dangle: ["error", "never"] */
/* eslint no-undef: 0 */
class Map {
  constructor(element) {
    this.element = element;
    this.run();
  }

  run() {
    const $newMap = this.element.find('.js-map__map');
    ymaps.ready(() => {
      const myMap = new ymaps.Map($newMap[0], {
        center: [37.787509, -122.444838],
        zoom: 13,
        controls: []
      }, {
        searchControlProvider: 'yandex#search',
        balloonCloseButton: false,
        balloonPanelMaxMapArea: Infinity

      });
      const CustomBalloon = ymaps.templateLayoutFactory.createClass(
        `<div class='map__panel'>
        <div class='map__greetings'>Meet us!</div>
        <div class='map__address'>1259 California st San Francisco, CA</div>
        <div class='map__mylocation'></div>
        <div class='map__pin'></div>`
      );
      const myPlacemark = new ymaps.Placemark([37.787509, -122.444838], {
      }, {
        balloonContentLayout: CustomBalloon,
        iconLayout: 'default#image',
        iconImageHref: '/../images/map-pin.svg',
        iconImageSize: [41, 56],
        iconImageOffset: [-5, -38]
      });
      myMap.geoObjects.add(myPlacemark);
      myPlacemark.balloon.open();
    });
  }
}

export default Map;
