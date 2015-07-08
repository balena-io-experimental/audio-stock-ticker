## Audio Stock Ticker

This is a simple node.js project built on [resin.io][resin-link]. It should work on all versions of the Raspberry Pi.

The audio stock ticker will verbally announce a list of your favourite stocks every couple of minutes or hours, depending on how you configure it.

To add more or change one of the 3 stocks, simply set an `Environment Variable` called `STOCK_N` with a string of `stockSymbol, stockName`.
e.g.:
```
STOCK_1  `AMZN, Amazon.com Incorporated`
```
The stockName after the `,` is the name that will actually be read out, where as the `AMZN` part is the **NASDAQ** stock symbol.

To get this project up and running, you will need to signup for a resin.io account [here][signup-page] and set up a device, have a look at our [Getting Started tutorial][gettingStarted-link]. Once you are set up with resin.io, you will need to clone this repo locally:
```
$ git clone https://github.com/resin-projects/audio-stock-ticker
```
Then add your resin.io application's remote:
```
$ git remote add resin username@git.resin.io:username/myappname.git
```
and push the code to the newly added remote:
```
$ git push resin master
```
It should take a few minutes for the code to push and start running. You should see some console logs printed on your resin.io dashboard and you should start hearing your Pi announcing stocks if you have a speaker or set of head phones plugged in.

[resin-link]:https://resin.io/
[signup-page]:https://dashboard.resin.io/signup
[gettingStarted-link]:http://docs.resin.io/#/pages/installing/gettingStarted.md
