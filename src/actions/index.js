import axios from 'axios';
import { FETCH_SINGLE_COMMENT, EDIT_SINGLE_COMMENT, FETCH_POST_COMMENTS, POST_NEW_COMMENT , DELETE_SINGLE_COMMENT, FETCH_BLOG_POSTS, FETCH_SINGLE_POST, POST_NEW_BLOG, UPDATE_COMMENT_VOTE, UPDATE_POST_VOTE, DELETE_SINGLE_POST, EDIT_SINGLE_POST} from './actionTypes';
const BLOG_REQUEST_URL = 'http://localhost:3001/';
axios.defaults.headers.common['Authorization'] = "andree";


export function fetchSingleComment(commentID) {
    const url = BLOG_REQUEST_URL + 'comments/' + commentID;
    const request = axios.get(url);

    return {
        type : FETCH_SINGLE_COMMENT,
        payload: request
    }
}


export function editComment(commentID, values, callback) {
    const url = BLOG_REQUEST_URL + 'comments/' + commentID;
    const request = axios.put(url, values)
        .then((payload) => callback(payload));

    return {
        type: EDIT_SINGLE_COMMENT,
        payload: request
    }
}

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
        .then((payload) => {
            callback(payload)
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

export function updateVote(postID, type, vote, callback) {
    const post_url = BLOG_REQUEST_URL + type + postID;
    const voteOption = {"option":vote};
    const request = axios.post(post_url, voteOption)
        .then((payload)=> callback(payload));

    var returnType = UPDATE_COMMENT_VOTE;
    if (type === 'posts/') {
        console.log("type has been changed to: " + UPDATE_POST_VOTE, post_url);
        returnType = UPDATE_POST_VOTE;
    }
    return {
        type: returnType,
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

export function editPost(postID, values, callback) {
    const post_url = BLOG_REQUEST_URL + 'posts/' + postID;
    const request = axios.put(post_url, values)
        .then((payload) => callback(payload));
    
    return {
        type: EDIT_SINGLE_POST,
        payload: request
    }
}