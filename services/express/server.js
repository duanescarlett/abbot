const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3001
const user = require('./routes/user')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(user)

app.listen(PORT, function() {
    console.log("Node Server running on PORT:" + PORT)
})

