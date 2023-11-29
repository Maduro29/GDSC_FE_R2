import { createSlice } from '@reduxjs/toolkit';

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addToWishlist: (state, action) => {
            state.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            return state.filter(item => item._id !== action.payload._id);
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
