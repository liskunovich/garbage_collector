import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "shared/api/axios";
import {Post} from "../../types/postsSchema";
import {POSTS_PER_PAGE} from "shared/consts/posts";

export interface PostsResponse {
    results: Post[];
    count: number;
}

export interface GetPostsProps {
    page: number;
}

export const getPosts = createAsyncThunk<PostsResponse, GetPostsProps, {rejectValue: string}>(
    'posts/getPosts',
    async ({page}, thunkAPI) => {
        try {
            const response = await Api.get('api/v1/main/posts/', {
                params: {
                    limit: POSTS_PER_PAGE,
                    offset: POSTS_PER_PAGE * (page - 1)
                }
            })
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue('Ошибка во время получения постов')
        }
    }
)