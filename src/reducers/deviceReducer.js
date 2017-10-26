export default function deviceReducer(state = {}) {
  let isMobile = state.isMobile === 'false' ? false : true;
  console.log('deviceReducer -> state', state);
  return { ...state, isMobile };
}
