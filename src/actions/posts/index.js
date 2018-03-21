// Instruments
import { CREATE_POST, CREATE_POST_FAIL, DELETE_POST, FETCH_POSTS, LIKE_POST, LIKE_POST_FAIL } from './type';

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

    console.log(data);
    // dispatch({
    //     type:    CREATE_POST,
    //     payload: data
    // });
};

/**
 *
 * @param {string} id
 * @returns {function(*, *)}
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
        throw new Error(`error:${response.message}`);
    }
};

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

export const likePost = (postId) => async (dispatch, getState) => {
    const { api, token } = getState().profile;

    const response = await fetch(`${api}/${postId}`, {
        method:  'PUT',
        headers: {
            'Content-Type':  'application/json',
            'Authorization': token
        }
    });

    if (response.status !== 200) {
        dispatch({
            type:    LIKE_POST_FAIL,
            payload: postId
        });
        throw new Error(`error:${response.message}`);
    }

    const { data } =  await response.json();

    dispatch({ type: LIKE_POST, payload: { postId, data }});
};
