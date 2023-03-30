export interface UserSchema {
    isAuth: boolean;
    username: string;
    email?: string;
    carton: number;
    glass: number;
    plastic: number;
    isLoading: boolean;
}