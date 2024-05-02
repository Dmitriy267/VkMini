import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type commentState = {
    kids: number[];
};
const initialState: commentState = {
    kids: [],
};
export const commentSlice = createSlice({
    name: 'kids',
    initialState,
    reducers: {
        getIdComment: (state, action: PayloadAction<number[]>) => {
            state.kids = action.payload;
        },
    },
});

export const { getIdComment } = commentSlice.actions;
export default commentSlice.reducer;
