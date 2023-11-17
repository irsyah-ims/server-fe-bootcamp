const { Message, jwt } = require('../helpers')
const User = require('../models/user')

module.exports = {
  authenticate(req, res, next) {
    // console.log("----------")
    // console.log(req.headers)
    // console.log("----------")
    if (req.headers.authorization) {
      let decoded = jwt.verify(req.headers.authorization);

      User.findOne({
        email: decoded.email
      })
        .then(user => {
          if (user) {
            req.user = decoded
            next()
          } else {
            throw Message.UNAUTHENTICATE
          }
        })
        .catch(next)
    } else {
      throw Message.UNAUTHENTICATE
    }
  },
  authorization(req, res, next) {
    if (req.user.role === 'admin') {
      next()
    } else {
      throw Message.UNAUTHORIZED
    }
  },
  isMe(req, res, next) {
    if (req.user.id === req.params.id) {
      next()
    } else {
      throw Message.UNAUTHORIZED
    }
  }
}
