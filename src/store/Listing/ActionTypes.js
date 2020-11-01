import {
  LAUNCHES_LISTING_LOADING,
  LAUNCHES_LISTING_DONE,
  LAUNCHES_LISTING_ERROR,
  CHANGE_LAUNCH_YEAR_FILTER,
  CHANGE_SUCCESSFUL_LAUNCH_FILTER,
  CHANGE_SUCCESSFUL_LAND_FILTER,
  INITIAL_FILTERS_SET,
} from "./Types";

export const toggleLauchesListingLoading = (payload) => {
  return {
    type: LAUNCHES_LISTING_LOADING,
    payload,
  };
};

export const lauchesListingDone = (payload) => {
  return {
    type: LAUNCHES_LISTING_DONE,
    payload,
  };
};
export const lauchesListingError = (payload) => {
  return {
    type: LAUNCHES_LISTING_ERROR,
    payload,
  };
};

export const changeLauchYearFilter = (payload) => {
  return {
    type: CHANGE_LAUNCH_YEAR_FILTER,
    payload,
  };
};

export const changeLaunchSuccessFilter = (payload) => {
  return {
    type: CHANGE_SUCCESSFUL_LAUNCH_FILTER,
    payload,
  };
};
export const changeLandSuccessFilter = (payload) => {
  return {
    type: CHANGE_SUCCESSFUL_LAND_FILTER,
    payload,
  };
};

export const setinitlalFilters = (payload) => {
  return {
    type: INITIAL_FILTERS_SET,
    payload,
  };
};
