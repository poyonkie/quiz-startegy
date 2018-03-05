// Actions
const PRODUCTS_LIST = 'PRODUCTS_LIST';
const PRODUCTS_SINGLE_DETAIL = 'PRODUCTS_SINGLE_DETAIL';
const PRODUCTS_ADD = 'PRODUCTS_ADD';
const PRODUCTS_EDIT = 'PRODUCTS_EDIT';
const PRODUCTS_FILTER = 'PRODUCTS_FILTER';
const PRODUCTS_REMOVE = 'PRODUCTS_REMOVE';

const initialState = {
  list: [],
  detail: []
};


export default function productReducer(state = initialState, action) {
  switch(action.type) {
    case `${PRODUCTS_LIST}_SUCCES`: {
      const { payload: {response = []} } = action;

      return {...state, list: response };
    }

    case `${PRODUCTS_SINGLE_DETAIL}_SUCCES`: {
      const { payload: {response = []} } = action;

      return {...state, detail: response };
    }

    case `${PRODUCTS_ADD}`: {
      const { payload= [] } = action;
      const list = state.list.concat(payload)
      return {...state, list };
    }

    case `${PRODUCTS_EDIT}`: {
      const { payload= [] } = action;
      const list = state.list.map( product => parseInt(product.id) === parseInt(payload.id) ? payload : product );
      return {...state, list };
    }

    case `${PRODUCTS_REMOVE}`: {
      const { payload= [] } = action;
      const list = state.list.map( product => parseInt(product.id) === parseInt(payload) ? {...product, status:'trash'} : product);
      return {...state, list };
    }

    default:
      return state;
  }
}
