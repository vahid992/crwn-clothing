import ActionCartTypes from './cart.types';

export const toggleCartHidden = () =>({
    type : ActionCartTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item =>({
    type:ActionCartTypes.ADD_ITEM,
    payload:item
});