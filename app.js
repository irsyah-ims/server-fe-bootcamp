require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

const routes = require('./routes');
const { errorHandler } = require('./helpers')

//database connection
console.log(process.env.URI_MONGODB);
mongoose.connect(process.env.URI_MONGODB, { useNewUrlParser: true , useUnifiedTopology: true });

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Movie App G2');
})

app.use('/', routes);

app.use(errorHandler.errorHandler)

app.listen(port, function() {
  console.log(`Your server listen on port ${port}`);
})