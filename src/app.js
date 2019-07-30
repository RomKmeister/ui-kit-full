import jQuery from 'jquery'

function importAll (r) {
    r.keys().forEach(r);
  }

importAll(require.context('../src/fonts', true, /\.*$/));
importAll(require.context('../src/', false, /\.scss$/));
importAll(require.context('../src/', true, /\.scss$/));
importAll(require.context('../src/', true, /\.js$/));
