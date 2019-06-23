import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import { CHANGE_AUTH } from 'actions/types';
import axios from 'axios';


export const urlComments = 'http://jsonplaceholder.typicode.com/comments'

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function fetchComments() {
;
    const response = axios.get(urlComments);
    return {
        type: FETCH_COMMENTS,
        payload: response
    };
}

export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}