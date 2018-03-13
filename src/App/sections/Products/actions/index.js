// API
import ProductsApi from './api';

// Actions
export const PRODUCTS_LIST = 'PRODUCTS_LIST';
export const PRODUCTS_SINGLE_DETAIL = 'PRODUCTS_SINGLE_DETAIL';
export const PRODUCTS_ADD = 'PRODUCTS_ADD';
export const PRODUCTS_EDIT = 'PRODUCTS_EDIT';
export const PRODUCTS_REMOVE = 'PRODUCTS_REMOVE';
export const PRODUCTS_FILTER = 'PRODUCTS_FILTER';

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

export function removeProduct(id) {
  return {
     type: PRODUCTS_REMOVE,
     payload: id
   }
}

export function filterProducts(filter) {
  return {
     type: PRODUCTS_FILTER,
     payload: filter
   }
}
