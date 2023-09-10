import Movie from "../models/Movie.js";

export const createMovie = async ( req, res ) => {
    const { name, category, description } = req?.body
    const newMovie = new Movie( { name, category, description } )
    const movie = await newMovie.save()
    res.status(201).json(movie)
}

export const getMovies = async ( req, res ) => {
    const movies = await Movie.find()
    res.json(movies)
}

export const getMovieByName = async ( req, res ) => {
    const movie = await Movie.findOne({ name: req.params.movieName })
    res.status(200).json(movie)
}

export const updateMovieById = async ( req, res ) => {
    const updateMovie = await Movie.findByIdAndUpdate(req.params.movieId, req.body, {new: true})
    res.status(200).json(updateMovie)
}

export const deleteMovieById = async ( req, res ) => {
    await Movie.findByIdAndDelete(req.params.movieId)
    res.status(204).json()
}