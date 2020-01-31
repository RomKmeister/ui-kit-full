$( function() {
    $(".js-location__map").each(
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
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
                );

            var myPlacemark = new ymaps.Placemark([37.787509, -122.444838], {
            }, {
                balloonContentLayout: CustomBalloon,
                iconLayout: 'default#image',
                iconImageHref: '../src/map/map-pin.svg',
                iconImageSize: [41, 56],
                iconImageOffset: [-5, -38]
            });

            myMap.geoObjects.add(myPlacemark);
            myPlacemark.balloon.open();
        })
    )
});
