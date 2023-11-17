module.exports = {
    errorHandler(err, req, res, next) {
      console.log("==========")
      console.log(JSON.stringify(err));
      console.log(err)
      if (err.code) {
        console.log(err.message)
        res.status(err.code).json({err: err.message});
      } else {
        if (err.errors) {
          let error = Object.keys(err.errors);
          // let message = err.errors[error].message;
          let message = {err: 'err'}
          res.status(500).json(message)
        } else {
          res.status(500).json(err);
        }
      }
    }
  }