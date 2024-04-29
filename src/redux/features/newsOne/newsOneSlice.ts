import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type newsOneState = {
    listId: number;
};
const initialState: newsOneState = {
    listId: 0,
};
export const newsOneSlice = createSlice({
    name: 'newsOne',
    initialState,
    reducers: {
        ShowNewsId: (state, action: PayloadAction<number>) => {
            state.listId = action.payload;
        },
    },
});

export const { ShowNewsId } = newsOneSlice.actions;
export default newsOneSlice.reducer;
