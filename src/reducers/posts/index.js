import {
    CREATE_POST_SUCCESS, DELETE_POST_SUCCESS,
    FETCH_POSTS_ERROR,
    FETCH_POSTS_SUCCESS,
    LIKE_POST_SUCCESS,
    START_POSTS_FETCHING,
    STOP_POSTS_FETCHING
} from '../../actions/posts/types';

const initialState = { data: [], isFetching: false, error: '' };

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_POST_SUCCESS:
            return Object.assign({}, state, {
                data: [payload, ...state.data]
            });
        case LIKE_POST_SUCCESS:
            return Object.assign({}, state, {
                data: [...state.data, payload]
            });
        case FETCH_POSTS_SUCCESS:
            return Object.assign({}, state, {
                data: [...state, ...payload.data]
            });
        case FETCH_POSTS_ERROR:
            return Object.assign({}, state, {
                error: payload
            });
        case START_POSTS_FETCHING:
            return Object.assign({}, state, {
                isFetching: true
            });
        case STOP_POSTS_FETCHING:
            return Object.assign({}, state, {
                isFetching: false
            });
        case DELETE_POST_SUCCESS: {
            return Object.assign({}, state, {
                data: state.data.filter((item) => item.id !== payload)
            });
        }
        default:
            return state;
    }
};
