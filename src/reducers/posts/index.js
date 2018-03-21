import { CREATE_POST, DELETE_POST, FETCH_POSTS, LIKE_POST } from '../../actions/posts/type';

import { random } from 'faker';

const initialState = [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_POST:
            return [...state, { id: random.uuid(), comment: payload }];
        case DELETE_POST:
            return state.filter((post) => post.id !== payload);
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
