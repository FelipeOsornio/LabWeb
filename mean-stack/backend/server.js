import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes.js';
import cors from 'cors';

dotenv.config()

const { urlencoded, json } = bodyParser;
const app = express();
const port = process.env.PORT || 8585;

app.use(cors());

app.use(urlencoded({
    extended: true
}));

app.use(json());

routes(app);

app.listen(port);
console.log('Servidor escuchando en puerto: ' + port);