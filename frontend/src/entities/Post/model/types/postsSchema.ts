
export interface Post {
    created: string;
    title: string;
    text: string;
    url: string;
}

export interface PostsSchema {
    posts: Post[];
    isLoading: boolean;
    page: number;
    totalPages: number;
    error?: string;
}