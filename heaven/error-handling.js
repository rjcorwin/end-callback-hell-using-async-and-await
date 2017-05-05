

//
// Declare 3 functions you can `await`. 
//
// A function you can `await` is a function that returns a Promise. Inside that Promise you do something asynchronous 
// and then call that Promise's `resolve` function. 
//

const operationOne = function (delay) {  
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

// This is the succinct version of that same sleep function.
const operationTwo = delay => new Promise((res, rej) => { 
    setTimeout(res, delay)
})

// Here's an example of the sleep function whose Promise rejects and returns an Error.
const operationThree = delay => new Promise((res, rej) => { 
  rej(new Error('Intentional error :)'))
})

//
// Declare a function that can take advantage of await.
//

async function timer () {  
  // Use a try so you can catch errors.
  try {

    await operationOne(1000)
    await operationTwo(1000)
    await operationThree(1000)
    console.log('done')

  }
  catch (err) {
    console.log('Caught error')
    console.log(err)
  }

}

// Kick it off.
timer()  
