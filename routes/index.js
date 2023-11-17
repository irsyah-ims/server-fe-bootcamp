const express = require('express');
const router = express.Router();

const { Message, crypt, jwt } = require('../helpers')

const User = require('../models/user');

const user = require("./user");
const movie = require('./movie');
const vehicle = require('./vehicle');

router.post('/register', (req, res, next) => {
    User.create({
        email: req.body.email,
        password: req.body.password,
        balance: req.body.balance,
        role: 'customer'
    })
    .then(cust => {
        res.status(201).json(cust)
    })
    .catch(next)
})

router.post('/register-admin', (req, res, next) => {
  User.create({
      email: req.body.email,
      password: req.body.password,
      role: 'admin'
  })
  .then(admin => {
      res.status(201).json(admin)
  })
  .catch(next)
})

router.post('/login', (req, res, next) => {
    console.log(req.body)

    User.findOne({
        email: req.body.email.toLowerCase()
    })
    .then(user => {
        if (!user) {
          throw Message.USER_NOT_FOUND
        } else {
          if (crypt.checkPassword(req.body.password, user.password)) {
           
            let signUser = {
              id: user._id,
              email: user.email,
              role: user.role,
              balance: user.balance
            }

            let token = jwt.sign(signUser)
            res.status(200).json({
              token: token,
              email: user.email,
              role: user.role,
              id: user._id,
              balance: user.balance
            })
          } else {
            throw Message.INVALID_EMAIL_PASSWORD
          }
        }
      }) 
      .catch(next)
})

router.use('/user', user)

router.use('/movies', movie)

router.use('/vehicles', vehicle)

module.exports = router