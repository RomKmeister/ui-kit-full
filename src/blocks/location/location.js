class Location {
  constructor(element) {
    this.element = element;
    this.run();
  }

  run() {
    const $newMap = this.element.find('.js-location__map');
    ymaps.ready( () => {
      const myMap = new ymaps.Map($newMap[0], {
          center: [37.787509, -122.444838],
          zoom: 13,
          controls: []
        }, {
          searchControlProvider: 'yandex#search',
          balloonCloseButton: false,
          balloonPanelMaxMapArea: Infinity

        }),
        CustomBalloon = ymaps.templateLayoutFactory.createClass(
          `<div class='location__panel'>
            <div class='location__greetings'>Meet us!</div>
            <div class='location__address'>1259 California st San Francisco, CA</div>
            <div class='location__mylocation'></div>
            <div class='location__pin'></div>`
        ),
        myPlacemark = new ymaps.Placemark([37.787509, -122.444838], {
        }, {
          balloonContentLayout: CustomBalloon,
          iconLayout: 'default#image',
          iconImageHref: '/../images/map-pin.svg',
          iconImageSize: [41, 56],
          iconImageOffset: [-5, -38]
        });
      myMap.geoObjects.add(myPlacemark);
      myPlacemark.balloon.open();
    })
  }
}

export default Location;