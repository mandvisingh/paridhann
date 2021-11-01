import cartActionTypes from "./cart-type";
import cartActiontypes from "./cart-type";

const INITAL_STATE = {
hidden: true,
cartItems: [],
}
const cartReducer = (state = INITAL_STATE, action) => {
switch(action.type){
case cartActiontypes.toggleCart:
    return{
        ...state,
      hidden: !state.hidden
    }
case cartActionTypes.addItem: {
  const itemToAdd = action.payload;
  const existingItem = state.cartItems.find(cartItem=> cartItem.id === itemToAdd.id)
  if(existingItem)
    return{
      ...state,
      cartItems: state.cartItems.map(cartItem=>cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1}: cartItem)
    }
    return {
      ...state,
      cartItems: [...state.cartItems, {...itemToAdd, quantity: 1}]
    }
  }
    default:
        return state
}
}
export default cartReducer;