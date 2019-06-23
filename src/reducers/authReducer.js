import { CHANGE_AUTH } from 'actions/types';

const INITIAL_STATE = false;

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_AUTH:
            return action.payload;
        default: return state;
    }
};