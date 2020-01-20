const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
        trim: true
    },
    cost: {
        type: Number,
        default: 0,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
} , {
    timestamps: true
})

const crop = mongoose.model('crops', taskSchema)

module.exports = crop