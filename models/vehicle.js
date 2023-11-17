const mongoose = require('mongoose');
const { Schema } = mongoose;

const vehicleSchema = new Schema({
    vehicleName: {
        type: String, 
        required: true
    },
    image: String,
    price: Number,
    status: {
        type: Boolean,
        default: false
    },
    
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = { Vehicle, ObjectId: mongoose.Types.ObjectId }