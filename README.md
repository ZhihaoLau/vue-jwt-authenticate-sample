# vue-jwt-authenticate-sample

> A Vue sample App that shows how to authenticate with JWTs (JSON Web Tokens)

# Usage
#### Get started
First you need to clone this repo **recursively**, because it needs a submodule of [JWT-Ready Express App](https://github.com/ZhihaoLau/nodejs-jwt-authentication-sample) to serve it.

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

#### Run Vue App
Open new tab in terminal/console, make sure you're in the project root, and run:
```
cd ..
npm run dev
```
This command will automatically open new tab of http://localhost:8080 in your browser.
