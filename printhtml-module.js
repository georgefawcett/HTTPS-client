var getHTML = require('./http-functions');

function printHTML (html) {
  for (i = 0; i < html.length; i++) {
  console.log(html[i], '\n');
}
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML)