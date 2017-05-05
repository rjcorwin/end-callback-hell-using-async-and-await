# The End of Callback Hell in Javascript
Use of async, await, and Promise in Node.js v7 mark an end to Callback Hell in Javascript.

Turn Callback Hell...
```javascript
http.get('foo', function(response) {
  console.log(response)
  http.get('bar', function(response) {
    console.log(response)
    http.get('baz', function(response) {
      console.log(response)
    })
  })
})
```

Into synchronous-looking yet non-blocking Heaven .. 
```javascript
var response = await http.get('foo')
console.log(response)
var response = await http.get('bar')
console.log(response)
var response = await http.get('baz')
console.log(response)
```

You should play with these examples! Break them. Improve them. Make a pull request. If you are a barbarian you can install node.js 7 on your personal computer, if you are a civilized human you can use Docker's `docker-compose up --build` in each folder to build and run the code in a Node.js v7 based container.
