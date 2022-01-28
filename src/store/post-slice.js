import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: { posts: [], msg: null, singlePost: {} },
    reducers: {
        loadPosts(state, action) {
            console.log(action);
            state.posts = action.payload;
        },
    },
});

export const postAction = postSlice.actions;

export default postSlice;