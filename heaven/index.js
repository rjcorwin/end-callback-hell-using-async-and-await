

//
// Declare 3 functions you can `await`. 
//
// A function you can `await` is a function that returns a Promise. Inside that Promise you do something asynchronous 
// and then call that Promise's `resolve` function. 
//

const operationOne = function (delay) {  
  return new Promise(function (resolve, reject) {
    console.log('operationOne is running...')
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

// This is the succinct version of operationOne function.
const operationTwo = delay => new Promise((res, rej) => { 
  console.log('operationTwo is running...')
  setTimeout(res, delay)
})

// Here's an example of the sleep function whose Promise rejects and returns an Error.
const operationThree = delay => new Promise((res, rej) => { 
  console.log('operationThree is running...')
  setTimeout(res, delay)
})

//
// Declare a function that can take advantage of `await` by using `async`.
//

async function timer () {  

  await operationOne(1000)
  await operationTwo(1000)
  await operationThree(1000)
  console.log('done')

}

// Kick it off.
timer()  
