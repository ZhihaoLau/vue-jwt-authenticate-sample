# vue-jwt-authenticate-sample

> Vue App authenticate with JWT sample

# Usage
#### GET STARTED
First you need to clone this repo **recursively**, because it needs a [Express App](https://github.com/ZhihaoLau/nodejs-jwt-authentication-sample) submodule to serve it.

`git clone --recursive https://github.com/ZhihaoLau/vue-jwt-authenticate-sample.git `

If you have clone the repo without parameter `--recursive`, don't worry. You can clone submodule by running:

`git submodule update --init --recursive`

> Some machines don't need to run this, it depends on your git version. [more about submodule](https://github.com/blog/2104-working-with-submodules)

Then you can install the dependencies by:
```
npm install
```
#### Run server
```
cd server
node server.js
```
