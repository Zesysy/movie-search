export const initialState = {
  loading: true,
  movies: [], // Table containing API data
  errorMessage: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true, // Represents the loading state of API data
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false, // Stop loading by passing the state to false
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false, // Stop loading by passing the state to false
        errorMessage: action.error // Get a possible error message from the API
      };
    default:
      return state;
  }
};
