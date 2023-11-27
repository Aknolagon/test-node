const express = require("express");

const app = express();

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];


app.get("/", (req, res) => {
    res.send("Welcome to my favourite movie list");
  });


const getMovies = (req, res) => {
    res.status(200).json(movies);
  };
  
  app.get("/api/movies", getMovies);

  const getMovie1 = (req, res) => {
    const movieId = movies.find((movie) => movie.id == req.params.id)
    if (movieId) {
      res.status(200).json(movieId);
    }
    else {res.status(404).send("Not Found")
  };
  }

app.get("/api/movies/:id", getMovie1);

module.exports = app;