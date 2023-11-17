const express = require('express');
const router = express.Router();

const { Message } = require('../helpers');
const { authenticate, authorization } = require('../middlewares/auth');

const { Movie, ObjectId } = require('../models/movie');

router.get('/', (req, res, next) => {
    Movie.find()
     .then(movies => {
        res.status(200).json(movies);
     })
     .catch(next)
})

router.get('/:id',  (req, res, next) =>{
    Movie.findById(ObjectId(req.params.id))
     .then(movie => {
         if (!movie) {
            throw Message.DATA_NOT_FOUND;
         } else {
            console.log(movie)
             res.status(200).json(movie);
         }
     })
     .catch(next)
})

router.get('/genre/:genre', (req, res, next) => {
    
    Movie.find({genre: req.params.genre})
     .then(movie => {
         if (!movie) {
            throw Message.DATA_NOT_FOUND;
         } else {
             res.status(200).json(movie);
         }
     })
     .catch(next)
})

router.put('/:id', (req, res, next) => {

    Movie.updateOne({ _id: req.params.id }, { ...req.body })
     .then(movie => {
        res.status(200).json({ message: 'success to updated'});
     })
     .catch(next)
})
    
router.post('/', (req, res, next) =>{   
    let casts = req.body.casts;

    if (typeof casts === 'string') {
        casts = casts.split(',')
    } 

    Movie.create({
        title: req.body.title,
        year: req.body.year,
        desc: req.body.desc,
        poster: req.body.poster,
        casts: req.body.casts,
        genre: req.body.genre
    })
     .then(movie => {
         res.status(201).json(movie)
     })
     .catch(next)
})

router.delete('/:id', (req, res, next) => {
    console.log(req.params.id)
    
    Movie.deleteOne({_id: req.params.id})
    .then(data => {
        res.status(200).json({ message: 'success to delete'});
    })
    .catch(next)
})


module.exports = router