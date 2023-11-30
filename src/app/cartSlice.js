import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const index = state.findIndex(cartItem => cartItem._id === item._id);
            if (index >= 0) {
                // If the item is already in the cart, do not add it again
                return;
            } else {
                state.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(cartItem => cartItem._id !== action.payload._id);
        },
        increaseQuantity: (state, action) => {
            const item = action.payload;
            const index = state.findIndex(cartItem => cartItem._id === item._id);
            if (index >= 0) {
                state[index].quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = action.payload;
            const index = state.findIndex(cartItem => cartItem._id === item._id);
            if (index >= 0 && state[index].quantity > 1) {
                state[index].quantity -= 1;
            }
        },
        clearCart: (state) => {
            return [];
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
