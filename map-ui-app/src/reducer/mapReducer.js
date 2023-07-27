// mapReducer.js
const initialState = {
  regionInfo: null,
  mapCenter: [0, 0], // Default center coordinates of the map
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REGION_INFO':
      return { ...state, regionInfo: action.payload };
    case 'SET_MAP_CENTER':
      return { ...state, mapCenter: action.payload };
    default:
      return state;
  }
};

export default mapReducer;