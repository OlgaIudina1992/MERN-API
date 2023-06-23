const mongoose = require('mongoose');


const stuffSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add some stuff']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Stuff', stuffSchema)