import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Comments = {
    idKid: number;
};
type commentsState = {
    comment: Comments[];
};
const initialState: commentsState = {
    comment: [],
};
export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        getComment: (state, action: PayloadAction<number>) => {
            state.comment.push({
                idKid: action.payload,
            });
        },
        updateComment: (state, action: PayloadAction<number>) => {
            state.comment.find((item) => item.idKid === action.payload);
        },
    },
});

export const { getComment, updateComment } = commentSlice.actions;
export default commentSlice.reducer;
