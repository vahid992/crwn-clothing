import ActionCartTypes from './cart.types';

export const toggleCartHidden = () =>({
    type : ActionCartTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item =>({
    type:ActionCartTypes.ADD_ITEM,
    payload:item
});

export const removeItem = item =>({
    type:ActionCartTypes.REMOVE_ITEM,
    payload:item
});

export const clearItemFromCart = item =>({
    type:ActionCartTypes.CLEAR_ITEM_FROM_CART,
    payload:item
});