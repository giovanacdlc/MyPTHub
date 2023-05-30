const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'PT'
    },
    text: {
        type: String, 
        required: [true, 'Please add a text value'],
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Message', messageSchema);