import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const index = state.findIndex(cartItem => cartItem._id === item._id);
            if (index >= 0) {
                state[index].quantity += 1;
            } else {
                state.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(cartItem => cartItem._id !== action.payload._id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
