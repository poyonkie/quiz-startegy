// Dependencies
import express from 'express';

// Data
import products from './data/products.json';

// Express Router
const Router = express.Router();

Router.get('/list', (req, res, next) => {
  res.json(products);
});

Router.get('/detail', (req, res, next) => {
  const {
    query: {
      id = 0
    }
  } = req;

  const selectedProducts = products.response.filter(product => product.id === Number(id));

  res.json({
    response: selectedProducts
  })
});

export default Router;
