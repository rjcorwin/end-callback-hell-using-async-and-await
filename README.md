# The End of Callback Hell in Javascript
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

You should play with these examples! Break them. Improve them. Make a pull request. If you are a barbarian you can install node.js 7 on your personal computer, if you are a civilized human you can use Docker's `docker-compose up --build` in each folder to build and run the code in a Node.js v7 based container.
