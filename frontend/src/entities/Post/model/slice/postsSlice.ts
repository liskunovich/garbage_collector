import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PostsSchema} from "../types/postsSchema";
import {getPosts} from "../../model/services/getPosts/getPosts";
import {POSTS_PER_PAGE} from "shared/consts/posts";

const initialState: PostsSchema = {
    posts: [],
    isLoading: false,
    page: 1,
    totalPages: 1,
}

const postsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.totalPages = Math.ceil(action.payload.count / POSTS_PER_PAGE);
            state.posts = action.payload.results;
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export const {actions: postsActions} = postsSlice;
export const {reducer: postsReducer} = postsSlice;
