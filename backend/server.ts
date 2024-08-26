import path from "path";
import cors from 'cors';
import express from 'express';
import passport from 'passport';

import routes from './src/routes/routes';
import configDotenv from './src/config/dotenv';
import configAuth from './src/middlewares/userCredential';


configAuth();
configDotenv();

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(passport.initialize());
app.use(routes);

app.listen(port, () => { console.log(`${process.env.APP_NAME} app listening at http://localhost:${port}`) });
    