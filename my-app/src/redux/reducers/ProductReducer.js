// In your Redux reducers file (reducers.js)
const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  const getProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PRODUCTS_SUCCESS':
        return {
          ...state,
          products: action.payload,
          loading: false,
          error: null,
        };
      case 'GET_PRODUCTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default getProductReducer;
  