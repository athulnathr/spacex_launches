import {
  LAUNCHES_LISTING_LOADING,
  LAUNCHES_LISTING_DONE,
  LAUNCHES_LISTING_ERROR,
} from "./Types";

const initalState = {
  listLoadig: true,
  listData: null,
  listingError: null,
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
    default:
      return state;
  }
};

export default ListingReducer;
