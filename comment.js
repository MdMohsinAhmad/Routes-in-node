const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017')

const fs = require('fs')
const path = require('path')
const directoryPath = path.join(__dirname)
const fullPath = `${directoryPath}/apple.txt`
const proSchema = mongoose.Schema({ name: String, Age: Number, Address: String })

router.get('/', async (req, res) => {
    const proModel = new mongoose.model('data', proSchema)
    let datas = proModel({ name: "Mohsin", age: 21, Address: "Kethireddipally" })
    let result = await datas.save();
   
    res.send(result)
    fs.writeFileSync(fullPath, result)
})
router.put('/', (req, res) => { //PUT can be used to update the data but it  require to update whole values
    res.send(`<input type="text" placeholder="Enter your name"`)
})
router.patch('/', (req, res) => {   //PATCH can be used to update data for a single value also
    res.send("This is comment patch page don't worry")
})
router.post('/', (req, res) => {       // POST is used to send the data like forms like LOGIN to client
    res.send("This is comment post page don't worry")
})
router.delete('/', (req, res) => {   // DELETE is used to delete the data on the browser for client side
    res.send("This is delete page don't worry")
})

module.exports = router