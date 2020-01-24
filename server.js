const express = require('express')  
const app = express()  
const port = 8000

app.use('/', express.static(__dirname))
app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})