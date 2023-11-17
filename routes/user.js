const express = require('express');
const router = express.Router();

const { Message } = require('../helpers');
const { authenticate, authorization } = require('../middlewares/auth');
const User = require('../models/user');

router.put('/:email', (req, res, next) => {
  User.updateOne({ email: req.params.email }, { ...req.body })
  .then(user => {
    res.status(200).json({ message: 'success to updated'})
  })
  .catch(next);
})

router.patch('/topup/:email', (req, res, next) => {
  User.findOne({ email: req.params.email})
  .then(user => {
    let balance = user.balance + Number(req.body.balance);

    User.updateOne({ email: req.params.email }, { balance })
      .then(userUpdated => {
        if (userUpdated.modifiedCount > 0) {
          res.status(200).json({ message: 'Balance updated'});
      } else {
          throw Message.UPDATE_NONE
      }
      })
    })
  .catch(next)
  
})

module.exports = router