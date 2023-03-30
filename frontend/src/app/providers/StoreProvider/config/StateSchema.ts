import {UserSchema} from "entities/User";
import {LoginSchema} from "features/Login";
import {PostsSchema} from "entities/Post";

export interface StateSchema {
    user: UserSchema;
    loginForm: LoginSchema;
    posts: PostsSchema;
}