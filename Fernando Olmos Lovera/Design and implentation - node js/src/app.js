
import express from "express";
import morgan from 'morgan'

import moviesRoutes from "./routes/movies.routes.js";
import authRoutes from "./routes/auth.routes.js"
import { createAdmin, createRoles } from "./libs/initialSetup.js";
const app = express()

app.use(express.json())
createRoles()
createAdmin()
app.use( morgan( 'dev' ) )
app.use('/api/movies/',moviesRoutes);
app.use('/api/auth/',authRoutes);
export default app