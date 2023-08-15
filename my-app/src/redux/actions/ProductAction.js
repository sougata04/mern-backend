// In your Redux actions file (actions.js)
export const getProducts = () => async (dispatch) => {
    try {
      // http://localhost:9000
      const response = await fetch('/products');
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
  
      const products = await response.json(); // Assuming the response contains the array of products
      dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: products }); // Dispatch the action with the fetched products
    } catch (error) {
      console.error('Error fetching products:', error.message);
      dispatch({ type: 'GET_PRODUCTS_FAILURE', error: error.message });
    }
  };
  