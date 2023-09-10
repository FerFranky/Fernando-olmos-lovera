import { Router } from 'express'
import * as moviesController from '../controllers/movies.controller.js'
import { isAdmin, isModerador, verifyToken } from '../middlewares/authJwt.js'

const router = Router()

router.get('/', moviesController.getMovies )
router.post('/', [verifyToken, isAdmin, isModerador], moviesController.createMovie )
router.get('/:movieName', moviesController.getMovieByName )
router.put('/:movieId', [verifyToken, isAdmin, isModerador], moviesController.updateMovieById )
router.delete('/:movieId', [verifyToken, isAdmin], moviesController.deleteMovieById )

export default router