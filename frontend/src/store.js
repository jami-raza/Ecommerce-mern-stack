import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {productReducer, productDetailReducer,} from './reducers/productReducer'
import {cartReducer} from './reducers/cartReducer'

const reducer = combineReducers({
    productList: productReducer,
    productDetails: productDetailReducer,
    cart: cartReducer,
});

const cartItemsFromStotage = localStorage.getItem('cartItems') ? JSON.parse(
  localStorage.getItem('cartItems')
) : []

const initialState = {
  cart : { cartItems: cartItemsFromStotage }
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;