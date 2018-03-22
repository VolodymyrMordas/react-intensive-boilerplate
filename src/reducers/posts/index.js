import { CREATE_POST, DELETE_POST, DELETE_POST_FAIL, FETCH_POSTS, LIKE_POST } from '../../actions/posts/type';

const initialState = [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_POST:
            return [...state, payload];
        case DELETE_POST:
            return state.filter((post) => post.id !== payload);
        case DELETE_POST_FAIL:
            return [...state];
        case FETCH_POSTS:
            return [...payload];
        case LIKE_POST: {
            const { data } = payload;

            return [...state, data];
        }
        default:
            return state;
    }
};
