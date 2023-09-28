const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017')
const fs = require('fs')

const dataRoutes = require('./data')
const commentRoutes = require('./comment')
const app = express()

const PORT = 10000;

app.use('/data', dataRoutes)
app.use('/comments', commentRoutes)

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT} Mohsin Boss`)
})
