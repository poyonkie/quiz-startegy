// API
import ProductsApi from './api';

// Actions
const PRODUCTS_LIST = 'PRODUCTS_LIST';
const PRODUCTS_SINGLE_DETAIL = 'PRODUCTS_SINGLE_DETAIL';
const PRODUCTS_ADD = 'PRODUCTS_ADD';
const PRODUCTS_EDIT = 'PRODUCTS_EDIT';
const PRODUCTS_FILTER = 'PRODUCTS_FILTER';

export function loadProducts() {
  return {
    type: PRODUCTS_LIST,
    payload: ProductsApi.getAllProducts()
  }
}

export function loadSingleProduct(query) {
  return {
      type: PRODUCTS_SINGLE_DETAIL,
      payload: ProductsApi.getSingleProduct(query)
    }
}

export function editProduct(dataForm) {
  return {
     type: PRODUCTS_EDIT,
     payload: dataForm
   }
}

export function addProduct(dataForm) {
  return {
     type: PRODUCTS_ADD,
     payload: dataForm
   }
}
