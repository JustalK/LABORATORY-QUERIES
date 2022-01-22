// Import packages.
const express = require('express')
const cors = require('cors')

// Create and configure a webserver.
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', async (request, response) => {
  response.status(200).send({
    status: 'done',
    date: new Date()
  })
})

// Start the webserver.
app.listen(4000, () => {
    console.log('Server is up on port 4000')
})
