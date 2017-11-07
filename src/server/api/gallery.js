// Dependencies
import express from 'express';

// Data
import pictures from '../../data/pictures.json';

// Express Router
const Router = express.Router();

Router.get('/gallery', (req, res, next) => {
  res.json(pictures);
});

Router.get('/picture', (req, res, next) => {
  const {
    query: {
      id = 0
    }
  } = req;

  const selectedPicture = pictures.response.filter(picture => picture.id === Number(id));

  res.json({
    response: selectedPicture
  })
});

export default Router;
