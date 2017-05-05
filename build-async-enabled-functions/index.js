// Use axios for an http library. Axios returns a Promise which makes it await-able. 
var http = require('axios')

// A function you can `await` is a function that returns a Promise. Inside that Promise you do something asynchronous 
// and then call that Promise's `resolve` function which is then what signals to await to continue. 
const sleep = function (delay) {  
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

// Our app function. Note how our use of await is encapsulated by a function that uses async.
async function app () {  
 
  console.log('Waiting 3 seconds...')
  await sleep(3000)

  console.log('First request.')
  var response = await http.get('http://api.github.com/repos/nodejs/node')
  console.log(response.data)

  console.log('Waiting 3 seconds...')
  await sleep(3000)

  console.log('Second request.')
  var response = await http.get('http://api.github.com/repos/nodejs/http2')
  console.log(response.data)

  console.log('Waiting 3 seconds...')
  await sleep(3000)

  console.log('Third request.')
  var response = await http.get('http://api.github.com/repos/nodejs/docker-node')
  console.log(response.data)

}

// Kick it off.
app()
