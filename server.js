var request = require('request');
var Lame = require('lame');
var Speaker = require('speaker');
var googleStocks = require('google-stocks');

var async = require('async');

var stock1 = (process.env['STOCK_1'] || 'AMZN, Amazon.com').split(',');
var stock2 = (process.env['STOCK_2'] || 'GOOG, Google Inc').split(',');
var stock3 = (process.env['STOCK_2'] || 'AAPL, Apple Computers').split(',');

var interval = process.env['INTERVAL'] || 60

var stockList = {}
stockList[stock1[0]] = stock1[1];
stockList[stock2[0]] = stock2[1];
stockList[stock3[0]] = stock3[1];

function readStocks() {
  async.forEachOfSeries(stockList, function(stockName, stockCode, callback) {
    googleStocks.get([stockCode], function(error, data) {
      text = stockName + ' stock is currently priced at ' +
        data[0]['l'] + '  dollars'
      console.log(text);
      var url = 'http://translate.google.com/translate_tts?tl=en&q=' +
        encodeURIComponent(text);
      request(url).pipe(new Lame.Decoder).pipe(new Speaker).on('close',
        callback);
    });
  });
}

readStocks();
setInterval(readStocks, interval * 1000)
