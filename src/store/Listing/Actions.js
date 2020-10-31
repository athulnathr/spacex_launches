import {
  toggleLauchesListingLoading,
  toggleLauchesListingDone,
  toggleLauchesListingError,
} from "./ActionTypes";

export const fetchLaunches = () => (dispatch, getState) => {
  dispatch(toggleLauchesListingLoading(true));
  // setTimeout(() => {
  //   dispatch(toggleLauchesListingLoading(false));
  // }, 5000);
};
