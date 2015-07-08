var request = require('request');
var Lame = require('lame');
var Speaker = require('speaker');
var googleStocks = require('google-stocks');
var async = require('async');

var stockList = {
  'AMZN': 'Amazon',
  'AAPL': 'Apple Computers',
  'GOOG': 'Google'
};

async.forEachOfSeries(stockList, function(stockName, stockCode, callback) {
  googleStocks.get([stockCode], function(error, data) {
    text = 'The current price of ' + stockName + ' stock is ' +
      data[0]['l'] + '  dollars'
    console.log(text);
    var url = 'http://translate.google.com/translate_tts?tl=en&q=' +
      encodeURIComponent(text);
    request(url).pipe(new Lame.Decoder).pipe(new Speaker).on('close',
      callback);
  });
});
