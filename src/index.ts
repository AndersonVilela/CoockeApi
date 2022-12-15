import express, { request } from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import path from 'node:path';
mongoose.connect('mongodb+srv://dev:b0Q1oG1pm6Zai14t@cluster0.zox8ino.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {

    const app = express();
    const cors = require('cors');
    app.use(cors());
    const port = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

  })
  .catch(() => console.log('Erro ao conectar no mongodb'));


