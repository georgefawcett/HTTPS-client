var getHTML = require('../http-functions');

function printReverse (html) {
  for (i = 0; i < html.length; i++) {
  console.log(html[i].split(" ").join("").split("").reverse().join(""), '\n');
}
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printReverse)