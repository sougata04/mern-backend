import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import your reducer here (getProductReducer in your case)
import getProductReducer from './reducers/ProductReducer';

import productDetailsReducer from './reducers/productDetailsReducer'; // Adjust the path to match your file structure

import cartReducer from './reducers/cartReducer';


const rootReducer = combineReducers({
  getProduct: getProductReducer,
  productDetails: productDetailsReducer, 
  cart: cartReducer,
});

const middleware = [thunk];

// Use applyMiddleware to apply middleware to the store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
