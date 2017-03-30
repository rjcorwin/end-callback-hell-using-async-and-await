#!/bin/bash

docker build -t rjsteinert/nodejs-v7-await-async-promises .
docker run rjsteinert/nodejs-v7-await-async-promises
