// API
import galleryApi from './api';

// Actions
const GALLERY_LIST_PICTURES = 'GALLERY_LIST_PICTURES';
const GALLERY_SHOW_SINGLE_PICTURE = 'GALLERY_SHOW_SINGLE_PICTURE';

export function loadGallery() {
  return {
    type: GALLERY_LIST_PICTURES,
    payload: galleryApi.getAllPictures()
  }
}

export function loadSinglePicture(query) {
  return {
      type: GALLERY_SHOW_SINGLE_PICTURE,
      payload: galleryApi.getSinglePictures(query)
    }
}
