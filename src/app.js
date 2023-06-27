import express from "express";
import cors from "cors";
import usersPersonalRoutes from "./routes/users_personal.routes.js";
import indexRoutes from "./routes/index.routes.js";

import './config.js';

const app = express();

// Configurar CORS
app.use(cors());

app.use(express.json());

app.use(indexRoutes);

app.use('/api', usersPersonalRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found'
  });
});

export default app;
