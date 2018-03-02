// Constants
import { API } from 'CONST_api';

// Utils
import { apiFetch } from 'API';

class GalleryApi {
  static getAllPictures() {
    return apiFetch(API.GALLERY.PICTURES);
  }

  static getSinglePictures(query) {
    return apiFetch(API.GALLERY.PICTURE, {}, query);
  }
}

export default GalleryApi;
