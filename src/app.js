require('webpack-jquery-ui/datepicker');
require('webpack-jquery-ui/selectmenu');
require('webpack-jquery-ui/slider');

function importAll (r) {
    r.keys().forEach(r);
  }

importAll(require.context('../src/fonts', true, /\.*$/));
importAll(require.context('../src/favicon', true, /\.*$/));
importAll(require.context('../src/', true, /\.scss$/));
importAll(require.context('../src/', true, /\.css$/));
importAll(require.context('../src/', true, /\.js$/));
