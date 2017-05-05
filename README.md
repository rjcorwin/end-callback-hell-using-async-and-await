# End Callback Hell using Async and Await 
Use of async, await, and Promise in Node.js v7 mark an end to Callback Hell in Javascript. This also works in a Web Browser if your code is transpiled using libraries like Babel.js or Typescript.

Turn Callback Hell...
```javascript
http.get('https://api.github.com/repos/nodejs/node', function(response) {
  console.log(response)
  http.get('https://api.github.com/repos/nodejs/http2', function(response) {
    console.log(response)
    http.get('https://api.github.com/repos/nodejs/docker-node', function(response) {
      console.log(response)
    })
  })
})
```

Into synchronous-looking yet non-blocking Heaven .. 
```javascript
var response = await http.get('https://api.github.com/repos/nodejs/node')
console.log(response)
var response = await http.get('https://api.github.com/repos/nodejs/http2')
console.log(response)
var response = await http.get('https://api.github.com/repos/nodejs/docker-node')
console.log(response)
```


## Read the annotated code examples
The files you'll be interested in reading are located in the following locations in this repository.
```
.
├── basic-example
│   └── index.js
├── build-async-enabled-functions
|   └── index.js
└── advanced-usage-ftw
    └── src
        ├── error-handling.js
        └── index.js
```

## Run the examples 

### Prerequisites
You can run two of the examples with Git and Node.js Installed on your system, but if you use Docker you can run the third advanced example and also not have to install Node 7 on your computer.
- Node.js 7 (http://nodejs.org/)
- Git  (https://git-scm.com/).
- Docker (https://www.docker.com/community-edition)

### Run using Node 7 installed on your computer
```
# Get the examples.
git clone git@github.com:rjsteinert/end-callback-hell-using-async-and-await.git
cd end-callback-hell-using-async-and-await

# Run the basic example.
cd basic-example
npm install
node index.js
cd ..

# Run the example showing how to build functions of your own that can be used with async.
cd build-async-able-functions 
npm install
node index.js
cd ...
```

### Run using Docker
These examples require you to either have Node 7 installed on your computer or alternatively run them with Docker so you don't need to mess up your system. Only the advanced usage example will work if you are running Docker.

To run each of the examples with Docker, `cd` into their respective folders and run `docker-compose up --build`.
```
# Get the examples.
git clone git@github.com:rjsteinert/end-callback-hell-using-async-and-await.git
cd end-callback-hell-using-async-and-await

# Run the basic example.
cd basic-example
docker-compose up --build
cd ..

# Run the example showing how to build functions of your own that can be used with async.
cd build-async-able-functions 
docker-compose up --build
cd ...

# Run the advanced-usage example.
cd advanced-usage
docker-compose up --build
cd ...
```

You should play with these examples! Break them. Improve them. Make a pull request.
