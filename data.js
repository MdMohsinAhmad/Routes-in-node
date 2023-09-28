const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017')

const proSchema =  mongoose.Schema({ name: String, Age: Number, Address: String })

router.get('/', async (req, res) => {
const proModel = new mongoose.model('data',proSchema)
    let data = proModel({ name: "Ahsan", age: 21, Address: "Kethireddipally" })
    let result = await data.save();
    res.send(result)
})
router.put('/', (req, res) => {

    res.send("This is put page 't worry")
})
router.patch('/', (req, res) => {   //PATCH can be used to update data for a single value also
    res.send("This is patch page don't worry")
})
router.post('/', (req, res) => {       // POST is used to send the data like forms like LOGIN to client
    res.send("This is post page don't worry")
})
router.delete('/', (req, res) => {   // DELETE is used to delete the data on the browser for client side
    res.send("This is delete page don't worry")
})

module.exports = router