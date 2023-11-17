const express = require('express');
const router = express.Router();

const { Message } = require('../helpers');
const { Vehicle, ObjectId } = require('../models/vehicle');

router.get('/', (req, res, next) => {
    Vehicle.find()
     .then(vehicle => {
        res.status(200).json(vehicle);
     })
     .catch(next)
})

router.post('/', (req, res, next) =>{   

    Vehicle.create({
        vehicleName: req.body.vehicleName,
        image: req.body.image,
        price: req.body.price,
        status: req.body.status
    })
     .then(vehicle => {
         res.status(201).json(vehicle)
     })
     .catch(next)
})

router.patch('/:id', (req, res, next) => {

    Vehicle.updateOne({ _id: req.params.id }, { ...req.body })
     .then(vehicle => {
         if (vehicle.modifiedCount > 0) {
            res.status(200).json({ message: 'success to updated'});
         } else {
             throw Message.UPDATE_NONE
         }
        
     })
     .catch(next)
})

module.exports = router
