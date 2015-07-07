## A Simple Server with Node.js Express

This is a simple skeleton Express server project that works on any of the `ARMv7` devices supported by [resin.io][resin-link].

This project simply serves up `"Hello World!"` on port `:80` of your resin.io device.

To get this project up and running, you will need to signup for a resin.io account [here][signup-page] and set up a device, have a look at our [Getting Started tutorial][gettingStarted-link]. Once you are set up with resin.io, you will need to clone this repo locally:
```
$ git clone git@github.com:resin-projects/simple-server-node.git
```
Then add your resin.io application's remote:
```
$ git remote add resin shaun@git.resinstaging.io:shaun/myapp.git
```
and push the code to the newly added remote:
```
$ git push resin master
```
It should take a few minutes for the code to push.

[resin-link]:https://resin.io/
[signup-page]:https://dashboard.resin.io/signup
[gettingStarted-link]:http://docs.resin.io/#/pages/installing/gettingStarted.md
