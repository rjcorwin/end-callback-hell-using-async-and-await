# The End of Callback Hell in Javascript


Use of async, await, and Promise in Node.js v7 mark an end to Callback Hell in Javascript.


```
var axios = require('axios')
var url = 'https://api.github.com' 

// Our app function.
async function app () {  
 
  console.log('First request.')
  var response = await axios.get(url)
  console.log(response.data)

  console.log('Second request.')
  var response = await axios.get(url)
  console.log(response.data)

  console.log('Third request.')
  var response = await axios.get(url)
  console.log(response.data)

}

// Kick it off.
app()
```











```
operationOne(function() {
  operationTwo(function() {
    operationThree(function() {
      console.log('done')
    })
  })
})
```

into Async Heaven ... 

```
await operationOne()
await operationTwo()
await operationThree()
console.log('done')
```

You should play with these examples! Break them. Improve them. Make a pull request. If you are a barbarian you can install node.js 7 on your personal computer, if you are a civilized human you can use Docker's `docker-compose up --build` in each folder to build and run the code in a Node.js v7 based container.
