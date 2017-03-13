function getHTML (options, callback) {

  var https = require('https');

  var html = [];

  https.get(options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    html.push(data);
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
    callback(html);
  });


});

}

function printHTML (html) {
  for (i = 0; i < html.length; i++) {
  console.log(html[i], '\n');
}
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)