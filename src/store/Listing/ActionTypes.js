import {
  LAUNCHES_LISTING_LOADING,
  LAUNCHES_LISTING_DONE,
  LAUNCHES_LISTING_ERROR,
} from "./Types";

export const toggleLauchesListingLoading = (payload) => {
  return {
    type: LAUNCHES_LISTING_LOADING,
    payload,
  };
};

export const toggleLauchesListingDone = (payload) => {
  return {
    type: LAUNCHES_LISTING_DONE,
    payload,
  };
};
export const toggleLauchesListingError = (payload) => {
  return {
    type: LAUNCHES_LISTING_ERROR,
    payload,
  };
};
