import {
  LAUNCHES_LISTING_LOADING,
  LAUNCHES_LISTING_DONE,
  LAUNCHES_LISTING_ERROR,
  CHANGE_LAUNCH_YEAR_FILTER,
  CHANGE_SUCCESSFUL_LAUNCH_FILTER,
  CHANGE_SUCCESSFUL_LAND_FILTER,
  INITIAL_FILTERS_SET,
} from "./Types";

const initalState = {
  listLoadig: true,
  listData: null,
  listingError: null,
  lauchYear: undefined,
  successfulLaunch: null,
  successfulLanding: null,
};

const ListingReducer = (state = initalState, action) => {
  switch (action.type) {
    case LAUNCHES_LISTING_LOADING:
      return {
        ...state,
        listLoadig: action.payload,
        listData: null,
        listingError: null,
      };
    case LAUNCHES_LISTING_DONE:
      return {
        ...state,
        listLoadig: false,
        listData: action.payload,
      };
    case LAUNCHES_LISTING_ERROR:
      return {
        ...state,
        listLoadig: false,
        listingError: action.payload,
      };
    case CHANGE_LAUNCH_YEAR_FILTER:
      return {
        ...state,
        lauchYear: action.payload,
      };
    case CHANGE_SUCCESSFUL_LAUNCH_FILTER:
      return {
        ...state,
        successfulLaunch: action.payload,
      };
    case CHANGE_SUCCESSFUL_LAND_FILTER:
      return {
        ...state,
        successfulLanding: action.payload,
      };
    case INITIAL_FILTERS_SET:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default ListingReducer;
