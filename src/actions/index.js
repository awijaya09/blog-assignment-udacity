import axios from 'axios';

const BLOG_REQUEST_URL = 'http://localhost:3001/';
axios.defaults.headers.common['Authorization'] = "andree";

export const FETCH_BLOG_POSTS = "FETCH_BLOG_POSTS";
export const POST_NEW_BLOG = "POST_NEW_BLOG";
export const FETCH_SINGLE_POST = "FETCH_SINGLE_POST";

export function fetchBlogPosts() {
    const url = BLOG_REQUEST_URL + 'posts';

    const request = axios.get(url);

    return {
        type: FETCH_BLOG_POSTS,
        payload: request
    };

}

export function createNewPost(values, callback) {
    const post_url = BLOG_REQUEST_URL + 'posts';
    const request = axios.post(post_url, values )
        .then(() => {
            callback()
        });

    return {
        type: POST_NEW_BLOG,
        payload: request
    };
}

export function getPost(postID) {
    const post_url = BLOG_REQUEST_URL + 'posts/' + postID;
    console.log(post_url);
    const request = axios.get(post_url);

    return {
        type: FETCH_SINGLE_POST,
        payload: request
    };
}