var request = require('request');
var Lame = require('lame');
var Speaker = require('speaker');
var stockscraper = require('stockscraper');

stockscraper.scrape('NASDAQ', 'AMZN', function(err, data) {
  text = 'The current price of Amazon stock is ' + data['l'] + ' dollars'
  console.log('The current price of Amazon stock is ' + data['l'] +
    ' dollars');

  var url = 'http://translate.google.com/translate_tts?tl=en&q=' +
    encodeURIComponent(text);
  request(url).pipe(new Lame.Decoder).pipe(new Speaker);
});
