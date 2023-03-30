import {userReducer, userActions} from "./model/slice/userSlice";
import {UserSchema} from "./model/types/userSchema";
import {JWTTokenResponse} from "./model/types/authData";
import {getUserIsAuth} from "./model/selectors/getUserAuth/getUserIsAuth";
import {getCurrentUser} from "./model/services/getCurrentUser/getCurrentUser";
import {getUserData} from "./model/selectors/getUserData/getUserData";

export {userReducer, userActions, getUserIsAuth, getCurrentUser, getUserData};
export type {UserSchema, JWTTokenResponse};