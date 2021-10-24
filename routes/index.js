import express from 'express';
import { sign_Out, signIn, signUp } from '../middlewares/auth-middleware'
var ir = express.Router();

/* GET home page. */
ir.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
ir.get('/auth/signout', function(req, res, next) {
  sign_Out();
  res.send("Logged out");
});

ir.post('/auth/signin', function(req, res, next) {
  signIn(req, res, next);
});

ir.post('/auth/signup', function(req, res, next) {
  signUp(req, res, next);
});

export default ir;
