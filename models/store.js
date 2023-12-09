const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    storeId: {
        type: String,
        require: [true, 'please add storeID'],
        unique: true,
        maxlength: [10, 'storeId must be less than 10 chars'],
        trim: true
    },
    address: {
        type: String,
        require: [true, 'please add address']
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedaddress: {
            type: String
        },
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Store', storeSchema);