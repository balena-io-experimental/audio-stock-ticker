#base-image for arm with node
FROM resin/rpi-node:0.10.36

MAINTAINER Shaun Mulligan <shaun@resin.io>

#Install dependencies
RUN apt-get update && apt-get install -yq --no-install-recommends \
		alsa-utils \
    libasound2-dev \
	  && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN DEBIAN_FRONTEND=noninteractive JOBS=MAX npm install --unsafe-perm
COPY . /usr/src/app

CMD ["node", "server.js"]
