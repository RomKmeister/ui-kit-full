/* global ymaps */

class Map {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const $newMap = this.element.find('.js-map__body');
    ymaps.ready(() => {
      const myMap = new ymaps.Map($newMap[0], {
        center: $newMap.data('coordinates'),
        zoom: 13,
        controls: [],
      });
      const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      }, {
        iconLayout: 'default#image',
        iconImageHref: '../src/blocks/map/images/map-pin.svg',
        iconImageSize: [41, 56],
        iconImageOffset: [-5, -38],
      });
      myMap.geoObjects.add(myPlacemark);
    });
  }
}

export default Map;
