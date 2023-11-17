const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    desc: String,
    poster: String,
    casts: [String],
    rating: Number,
    genre: String
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = { Movie, ObjectId: mongoose.Types.ObjectId }

/** DATA DUMP */

//{"_id":{"$oid":"6556ee970838bc740965dd52"},"title":"The Marvels","year":{"$numberInt":"2023"},"desc":"Carol Danvers gets her powers entangled with those of Kamala Khan and Monica Rambeau, forcing them to work together to save the universe.","poster":"https://cdn.marvel.com/content/1x/marvels_imax_digital_supplemental_v3_lg.jpg","casts":["Brie Larson, Teyonah Parris, Iman Vellani, Gary Lewis, Park Seo Joon"],"genre":"action","__v":{"$numberInt":"0"}}
//{"_id":{"$oid":"6556ef190838bc740965dd54"},"title":"Killers of the Flower Moon","year":{"$numberInt":"2023"},"desc":"When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.","poster":"https://bloximages.newyork1.vip.townnews.com/tulsaworld.com/content/tncms/assets/v3/editorial/c/22/c228727c-46a9-11ee-8fdb-174a2d716f33/64ee537d93037.image.png?resize=333%2C500","casts":["Leonardo DiCaprio, Robert De Niro, Lily Gladstone"],"genre":"true crime","__v":{"$numberInt":"0"}}
//{"_id":{"$oid":"6556efa60838bc740965dd56"},"title":"Oppenheimer","year":{"$numberInt":"2023"},"desc":"The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.","poster":"https://cinemags.org/wp-content/uploads/2023/05/Oppenheimer-poster.jpg","casts":["Cillian Murphy, Emily Blunt, Matt Damon"],"genre":"History","__v":{"$numberInt":"0"}}
//{"_id":{"$oid":"6556f0480838bc740965dd58"},"title":"Barbie","year":{"$numberInt":"2023"},"desc":"Barbie suffers a crisis that leads her to question her world and her existence.","poster":"https://www.themoviedb.org/t/p/original/u5kboZR4OMi4QdbOhawCZuzMVWJ.jpg","casts":["Margot Robbie, Ryan Gosling, Issa Rae"],"genre":"Fantasy","__v":{"$numberInt":"0"}}
//{"_id":{"$oid":"6556f0f20838bc740965dd5a"},"title":"Squid Game","year":{"$numberInt":"2021"},"desc":"Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.","poster":"https://m.media-amazon.com/images/I/7118ecsxO3L.jpg","casts":["Lee Jung Jae, Ho Yeon Jung, Park Hae Soo, Yeong-su Oh"],"genre":"Thriller","__v":{"$numberInt":"0"}}
//{"_id":{"$oid":"6556f1660838bc740965dd5c"},"title":"12 Angry Men","year":{"$numberInt":"1957"},"desc":"The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.","poster":"https://i.pinimg.com/originals/40/10/ea/4010ea6e29cde26c2e4e501d14450bec.jpg","casts":["Henry Fonda, Lee J Cobb, Martin Balsam"],"genre":"Crime","__v":{"$numberInt":"0"}}
//{"_id":{"$oid":"6556f1e30838bc740965dd5e"},"title":"Fight Club","year":{"$numberInt":"1999"},"desc":"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.","poster":"https://i.etsystatic.com/18242346/r/il/c9908e/2412674268/il_fullxfull.2412674268_1sgm.jpg","casts":["Brad Pitt, Edward Norton, Meat Loaf"],"genre":"Drama","__v":{"$numberInt":"0"}}
//{"_id":{"$oid":"6556f28f0838bc740965dd60"},"title":"The Godfather","year":{"$numberInt":"1972"},"desc":"Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.","poster":"https://i.ebayimg.com/images/g/X~cAAOSwz2ZiaB2w/s-l1600.jpg","casts":["Mario Brando, Al Pacino, James Caan"],"genre":"Crime","__v":{"$numberInt":"0"}}
//{"_id":{"$oid":"6556f3700838bc740965dd62"},"title":"The Dark Knight","year":{"$numberInt":"2008"},"desc":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.","poster":"https://m.media-amazon.com/images/I/81YmUpKBTYL.jpg","casts":["Christian Bale, Heath Ledger, Aaroon Eckhart"],"genre":"Action","__v":{"$numberInt":"0"}}