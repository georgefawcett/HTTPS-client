var getHTML = require('../http-functions');

function printUpperCase (html) {
  for (i = 0; i < html.length; i++) {
  console.log(html[i].toUpperCase(), '\n');
}
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printUpperCase)