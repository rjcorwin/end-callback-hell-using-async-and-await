var axios = require('axios')
//var url = 'https://api.github.com' 
var url = '0.0.0.0:5984' 

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
