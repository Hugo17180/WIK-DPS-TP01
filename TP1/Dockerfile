FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc
RUN apt-get remove -y gcc g++ make python && \
    apt-get autoremove -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN adduser --disabled-password --gecos '' hugo
USER hugo
CMD node ./build/index.js
