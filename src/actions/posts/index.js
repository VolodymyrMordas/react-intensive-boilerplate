// Instruments
import {
    CREATE_POST, CREATE_POST_FAIL, DELETE_POST, DELETE_POST_FAIL, FETCH_POSTS, LIKE_POST,
    LIKE_POST_FAIL
} from './type';

export const createPost = (msg) => async (dispatch, getState) => {
    const { api, token } = getState().profile;

    const response = await fetch(api, {
        method:  'POST',
        headers: {
            'Content-Type':  'application/json',
            'Authorization': token
        },
        body: JSON.stringify({ comment: msg })
    });

    if (response.status !== 200) {
        dispatch({
            type: CREATE_POST_FAIL
        });
    }

    const { data } = await response.json();

    dispatch({
        type:    CREATE_POST,
        payload: data
    });
};

/**
 *
 * @param {string} id - post id
 * @returns {function(*, *)} delete post action creator
 */
export const deletePost = (id) => async (dispatch, getState) => {
    const { api, token } = getState().profile;
    const response = await fetch(`${api}/${id}`, {
        method:  'DELETE',
        headers: {
            'Content-Type':  'application/json',
            'Authorization': token
        }
    });

    if (response.status !== 200) {
        const { message } = await response.json();

        dispatch({
            type:    DELETE_POST_FAIL,
            payload: message
        });

    } else {
        dispatch({
            type:    DELETE_POST,
            payload: id
        });
    }
};

/**
 * fetch post action creator
 *
 * @return {function(*, *)} fetch post action creator
 */
export const fetchPosts = () => async (dispatch, getState) => {
    const { api } = getState().profile;

    const response = await fetch(api);

    if (response.status !== 200) {
        throw new Error(`error:${response.message}`);
    }

    const data = await response.json();

    const { data: posts } = data;

    dispatch({
        type:    FETCH_POSTS,
        payload: posts
    });
};

/**
 * like/dislike post action creator
 *
 * @param {string} id - post id
 *
 * @return {function(*, *)} action creator
 */
export const likePost = (id) => async (dispatch, getState) => {
    const { api, token } = getState().profile;

    const response = await fetch(`${api}/${id}`, {
        method:  'PUT',
        headers: {
            'Content-Type':  'application/json',
            'Authorization': token
        }
    });

    if (response.status !== 200) {
        dispatch({
            type:    LIKE_POST_FAIL,
            payload: id
        });
    }

    const { data } =  await response.json();

    dispatch({ type: LIKE_POST, payload: { postId: id, data }});
};
