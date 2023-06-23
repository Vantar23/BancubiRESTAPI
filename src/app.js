import express from "express";
import usersPersonalRoutes from "./routes/users_personal.routes.js";
import indexRoutes from "./routes/index.routes.js"

import './config.js'

const app = express();

app.use(express.json())

app.use(indexRoutes);

app.use('/api', usersPersonalRoutes);

app.use((req, res, next) =>{
    res.status(404).json({
        message:'endpoint not found'
    })
})

export default app