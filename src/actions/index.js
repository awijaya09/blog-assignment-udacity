import axios from 'axios';

const BLOG_REQUEST_URL = 'http://localhost:3001/';
axios.defaults.headers.common['Authorization'] = "andree";

export const FETCH_BLOG_POSTS = "FETCH_BLOG_POSTS";
export const POST_NEW_BLOG = "POST_NEW_BLOG";

export function fetchBlogPosts() {
    const url = BLOG_REQUEST_URL + 'posts';

    const request = axios.get(url);

    return {
        type: FETCH_BLOG_POSTS,
        payload: request
    };

}

export function createNewPost(values) {
    const post_url = BLOG_REQUEST_URL + 'posts';
    const request = axios.post(post_url, values );

    return {
        type: POST_NEW_BLOG,
        payload: request
    };
}