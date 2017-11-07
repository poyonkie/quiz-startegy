// Constants
import { API } from '../../constants/api';

// Utils
import { apiFetch } from '../../lib/utils/api';

class GalleryApi {
  static getAllPictures() {
    return apiFetch(API.GALLERY.PICTURES);
  }

  static getSinglePictures(query) {
    return apiFetch(API.GALLERY.PICTURE, {}, query);
  }
}

export default GalleryApi;
