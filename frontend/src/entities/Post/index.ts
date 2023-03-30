import NewsCard from "./ui/NewsCard/NewsCard";
import {postsActions, postsReducer} from "./model/slice/postsSlice";
import {PostsSchema} from "./model/types/postsSchema";
import {getPostsData} from './model/selectors/getPostsData/getPostsData';

export {NewsCard, postsReducer, postsActions, PostsSchema, getPostsData};