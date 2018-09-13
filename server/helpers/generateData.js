const request = require('request');
require('./connectDB');
const { Movie } = require('../models/movie.model');

function getMovie(title, year) {
  const uri = `http://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=311c8c79`;
  request.get(uri, (err, body, data) => {
    const movieData = JSON.parse(data);
    const movie = new Movie({...movieData});
    movie.save();
  });
}

// setTimeout(() => {
//   getMovie('Infinity War', '2018');
//   getMovie('The Nun', '2018');
// }, 1000);