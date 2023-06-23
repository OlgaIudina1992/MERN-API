const asyncHandler = require('express-async-handler');

const Stuff = require('../model/stuffModel');

const getStuff = asyncHandler(async (req, res) => {
    
    const stuff = await Stuff.find()

    res.status(200).json(stuff)
})

const postStuff = asyncHandler(async (req, res) => {
   if(!req.body.text) {
    res.status(400)
    throw new Error("Not found")
   }

   const stuff = await Stuff.create({
    text: req.body.text
   })

    res.status(200).json(stuff)
})

const putStuff = asyncHandler(async (req, res) => {

    const stuff = await Stuff.findById(req.params.id)

    if(!stuff) {
        res.status(400)
        throw new Error("No stuff")
    }
    const updatedStuff = Stuff.findByIdAndUpdate(req.params.id, req.body, {new: true,})

    res.status(200).json(updatedStuff)
})

const deleteStuff = asyncHandler(async (req, res) => {

    const stuff = await Stuff.findById(req.params.id)

    if(!stuff) {
        res.status(400)
        throw new Error("No stuff")
    }
    await stuff.remove();

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getStuff, postStuff, putStuff, deleteStuff,
}