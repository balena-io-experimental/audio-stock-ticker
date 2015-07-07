#base-image for arm with node
FROM resin/rpi-raspbian

MAINTAINER Shaun Mulligan <shaun@resin.io>

#Install dependencies
RUN apt-get update && apt-get install -yq --no-install-recommends \
		alsa-utils \
    libasound2-dev \
	  && rm -rf /var/lib/apt/lists/*

# install deps on build server
COPY package.json package.json
RUN npm install

# copy all files to /app dir
COPY . /app

# Run server when container runs on device
CMD ["node", "/app/server.js"]
