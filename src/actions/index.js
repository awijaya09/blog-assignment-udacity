import axios from 'axios';

const BLOG_REQUEST_URL = 'http://localhost:3001/';
axios.defaults.headers.common['Authorization'] = "andree";

export const FETCH_BLOG_POSTS = "FETCH_BLOG_POSTS";
export const POST_NEW_BLOG = "POST_NEW_BLOG";
export const FETCH_SINGLE_POST = "FETCH_SINGLE_POST";
export const UPDATE_POST_VOTE = "UPDATE_POST_VOTE";
export const DELETE_SINGLE_POST = "DELETE_SINGLE_POST";
export const FETCH_POST_COMMENTS = "FETCH_POST_COMMENTS";
export const POST_NEW_COMMENT = "POST_NEW_COMMENT";
export const DELETE_SINGLE_COMMENT = "DELETE_SINGLE_COMMENT";

export function fetchComments(postID) {
    const url = BLOG_REQUEST_URL + 'posts/' + postID + '/comments';
    const request = axios.get(url);

    return {
        type: FETCH_POST_COMMENTS,
        payload: request
    }
}

export function createNewComment(values, callback) {
    const url = BLOG_REQUEST_URL + 'comments';
    const request = axios.post(url, values)
        .then((payload) => {
            callback(payload);
        });

    return {
        type: POST_NEW_COMMENT,
        payload: request
    }
}

export function deleteComment(commentID, callback) {
    const url = BLOG_REQUEST_URL + 'comments/' + commentID;
    const request = axios.delete(url)
    .then((payload) => callback(payload));

    return {
        type: DELETE_SINGLE_COMMENT,
        payload: request
    }
}

export function fetchBlogPosts(callback) {
    const url = BLOG_REQUEST_URL + 'posts';
    const request = axios.get(url)
        .then((payload) => callback(payload));

    return {
        type: FETCH_BLOG_POSTS,
        payload: request
    };

}

export function createNewPost(values, callback) {
    const post_url = BLOG_REQUEST_URL + 'posts';
    const request = axios.post(post_url, values)
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
    const request = axios.get(post_url);

    return {
        type: FETCH_SINGLE_POST,
        payload: request
    };
}

export function updateVote(postID, vote) {
    const post_url = BLOG_REQUEST_URL + 'posts/' + postID;
    const voteOption = {"option":vote};
    const request = axios.post(post_url, voteOption);

    return {
        type: UPDATE_POST_VOTE,
        payload: request
    }

}

export function deletePost(postID, callback) {
    const post_url = BLOG_REQUEST_URL + 'posts/' + postID;
    const request = axios.delete(post_url)
        .then((payload) => callback(payload));

    return {
        type: DELETE_SINGLE_POST,
        payload: request
    }
}