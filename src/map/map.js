ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [37.787509, -122.444838],
            zoom: 13,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/location-main-pin.svg',
            iconImageSize: [41, 56],
            iconImageOffset: [-5, -38]
        });
        myMap.balloon.open([37.787509, -122.444838], 
            "<div class='location__panel'>" +
            "<div class='location__greetings'>Meet us!</div>" +
            "<div class='location__address'>1259 California st San Francisco, CA</div>" +
            "<svg class='location__mylocation' xmlns='http://www.w3.org/2000/svg' width='27' height='26' viewBox='0 0 27 26'><path d='M22.678 11.951h2.774a1.049 1.049 0 0 1 0 2.097h-2.798a9.23 9.23 0 0 1-8.106 8.014v2.89a1.049 1.049 0 0 1-2.096 0v-2.89a9.23 9.23 0 0 1-8.106-8.014h-2.798a1.048 1.048 0 1 1 0-2.097h2.774a9.23 9.23 0 0 1 8.13-8.223v-2.68a1.049 1.049 0 0 1 2.096 0v2.68a9.23 9.23 0 0 1 8.13 8.223zm-1.77 2.097h-2.585a1.048 1.048 0 1 1 0-2.097h2.614a7.5 7.5 0 0 0-6.389-6.48v2.706a1.048 1.048 0 1 1-2.096 0v-2.705a7.5 7.5 0 0 0-6.39 6.48h2.615a1.048 1.048 0 0 1 0 2.096h-2.585a7.5 7.5 0 0 0 6.36 6.27v-2.495a1.048 1.048 0 1 1 2.096 0v2.495a7.5 7.5 0 0 0 6.36-6.27z' fill='#ffffff'/></svg>" +
            "<svg class='location__pin' xmlns='http://www.w3.org/2000/svg' width='17' height='23' viewBox='0 0 17 23'><path d='M8.94 0.93a8.16 8.16 0 0 1 8.007 9.737c.012.13.021.264.028.401 0 0-1.192 7.348-7.768 12.528v.409l-.268-.201c-.088.067-.177.134-.268.2v-.408c-6.575-5.18-7.768-12.528-7.768-12.528.007-.137.017-.271.029-.401a8.16 8.16 0 0 1 8.008-9.736zm-3.207 8.305a3.284 3.284 0 1 0 6.568 0 3.284 3.284 0 0 0-6.568 0z' fill='#ffffff'/></svg>" +
            "</div>", 
            {   
                closeButton: false,
                panelMaxMapArea: Infinity
        });

        myMap.geoObjects.add(myPlacemark)
});
