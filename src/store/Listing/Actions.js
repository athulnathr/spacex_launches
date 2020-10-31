import {
  toggleLauchesListingLoading,
  lauchesListingDone,
  lauchesListingError,
  changeLauchYearFilter,
  changeLaunchSuccessFilter,
  changeLandSuccessFilter,
} from "./ActionTypes";

import axios from "axios";
import { LISTING_LAUNCHES } from "../../constants/ApiRoutes";

export const fetchLaunches = () => async (dispatch, getState) => {
  dispatch(toggleLauchesListingLoading(true));
  try {
    const { data, status } = await axios.get(LISTING_LAUNCHES, {});
    if (200 === status) {
      dispatch(lauchesListingDone(data));
    } else {
      dispatch(
        lauchesListingError({ status: 500, message: "Some Error Occured" })
      );
    }
  } catch (error) {
    dispatch(lauchesListingError(error));
    console.log(error, "error on fetch call");
  }
};

export const launchYearFilterChange = (payload) => (dispatch) => {
  dispatch(changeLauchYearFilter(payload));
};

export const launchSuccessFilterChange = (payload) => (dispatch) => {
  dispatch(changeLaunchSuccessFilter(payload));
};

export const landSuccessFilterChange = (payload) => (dispatch) => {
  dispatch(changeLandSuccessFilter(payload));
};
