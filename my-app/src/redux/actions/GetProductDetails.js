

export const getProductDetails = (productId) => async (dispatch) => {
  try {
    // http://localhost:9000
    const response = await fetch(`/products/${productId}`); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }

    const productDetails = await response.json(); // Assuming the response contains the product details
    dispatch({ type: 'GET_PRODUCT_DETAILS_SUCCESS', payload: productDetails }); // Dispatch the action with the fetched product details
  } catch (error) {
    console.error('Error fetching product details:', error.message);
    dispatch({ type: 'GET_PRODUCT_DETAILS_FAILURE', error: error.message });
  }
};
