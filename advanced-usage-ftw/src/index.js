var axios = require('axios')
var dbUrl = 'http://db:5984' 

// A function that returns true if the database is available. 
// This works because Axios will throw an error if the connection is refused.
const dbReady = () => new Promise(async (res, rej) => { 
  try {
    await axios.get(dbUrl)
    res(true)
  }
  catch (err) {
    res(false)
  }
})
  
// A classic sleep function to pause execution.
const sleep = (ms) => new Promise(async (res, rej) => { 
  setTimeout(res, ms)
})

// Our foo function.
async function foo () {  
 
  // Use await keyword in conditionals and sleep in a while loop!
  console.log('Waiting until datbase is ready...')
  while ((await dbReady()) === false) { 
    console.log('Database not ready. Sleeping one second...')
    await sleep(1000)
  }
  console.log('Database is ready!')

  console.log('Making a request to the database.')
  var response = await axios.get(dbUrl)
  console.log(response.data)

}

// Kick it off.
foo()  
