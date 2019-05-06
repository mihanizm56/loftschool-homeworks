import { createSelector } from 'reselect';

const getShows = state => state.searchReducer.data;
const getLoadingState = state => state.searchReducer.searchLoading;

export const getShowsSelector = createSelector(
  [getShows],
  shows => shows
);

export const isLoadingSelector = createSelector(
  [getLoadingState],
  state => state
);
