// Constants
import { API } from 'CONST_api';

// Utils
import { apiFetch } from 'API';

class ProductsApi {
  static getAllProducts() {
    return apiFetch(API.PRODUCTS.LIST);
  }

  static getSingleProduct(query) {
    return apiFetch(API.PRODUCTS.DETAIL, {}, query);
  }
}

export default ProductsApi;
