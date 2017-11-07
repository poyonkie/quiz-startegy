// Utils
import { getNewState } from '../../lib/utils/frontend';

const initialState = {
  pictures: [],
  picture: []
};


export default function galleryReducer(state = initialState, action) {
  switch(action.type) {
    case 'GALLERY_LIST_PICTURES_SUCCES': {
      const { payload: {response = []} } = action;

      return {...state, pictures: response };
    }

    case 'GALLERY_SHOW_SINGLE_PICTURE_SUCCES': {
      const { payload: {response = []} } = action;

      return {...state, picture: response };
    }

    default:
      return state;
  }
}
