// mapActions.js
export const setRegionInfo = (info) => ({
  type: 'SET_REGION_INFO',
  payload: info,
});

export const setMapCenter = (center) => ({
  type: 'SET_MAP_CENTER',
  payload: center,
});
