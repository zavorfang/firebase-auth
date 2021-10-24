import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import ir from './routes/index';

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', ir);
export default app;