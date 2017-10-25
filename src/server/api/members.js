// Dependences
import express from 'express';

// Data
import users from '../../data/users.json';
import user from '../../data/user.json';

// Express Router
const Router = express.Router();

Router.get('/users', (req, res, next) => {
  res.json(users);
});

Router.get('/user', (req, res, next) => {
  res.json(user);
});

export default Router;
