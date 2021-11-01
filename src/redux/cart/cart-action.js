import cartActionTypes from "./cart-type";

export const toggleCartHidden = () => ({
    type: cartActionTypes.toggleCart
})

export const addItemToCart = (item) => ({
    type: cartActionTypes.addItem,
    payload: item
})