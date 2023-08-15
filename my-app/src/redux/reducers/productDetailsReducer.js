const initialProductDetailsState = {
    title: [],
    description: '',
    url:'',
    
    // Add more properties for other product details
  };
  
  const productDetailsReducer = (state = initialProductDetailsState, action) => {
    switch (action.type) {
      case 'GET_PRODUCT_DETAILS_SUCCESS':
        return {
          ...state,
          ...action.payload,
        };
      case 'GET_PRODUCT_DETAILS_FAILURE':
        return {
          ...state,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default productDetailsReducer;
  