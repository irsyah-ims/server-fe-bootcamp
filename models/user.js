const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { crypt } = require('../helpers');

let userSchema = new Schema({
  email: {
    type: String,
    required: [ true, 'Email is required' ],
    validate: [{
        validator: function(value) {
          return new Promise((resolve, reject) => {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
              reject();
            } else {
              resolve();
            }
          })
        },
        message: props => `Invalid email format`
      },
      {
        validator: function(value) {
          return new Promise((resolve, reject) => {
            User.find({
                  _id: { $ne: this._id },
                  email: value
               })
              .then( data => {
                  if(data.length !== 0) {
                    reject();
                  } else {
                    resolve()
                  }
              })
              .catch(err => {
                  reject(err);
              });
          })
        },
        message: props => `email for '${props.value}' has been used`
      }]
  },
  password: {
    type: String
  },
  role: String,
  balance: Number
});

userSchema.pre('save', function(next) {
  this.password = crypt.hashPassword(this.password);
  next();
});

let User = mongoose.model('User', userSchema);

module.exports = User
