import axios from 'axios';

const BLOG_REQUEST_URL = 'http://localhost:3001/';

export const FETCH_BLOG_POSTS = "FETCH_BLOG_POSTS";
export function fetchBlogPosts() {
    const url = BLOG_REQUEST_URL + 'posts';
    axios.defaults.headers.common['Authorization'] = "andree";
    const request = axios.get(url);

    return {
        type: FETCH_BLOG_POSTS,
        payload: request
    };

}