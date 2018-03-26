// Instruments
import {
    CREATE_POST,
    CREATE_POST_START,
    CREATE_POST_STOP,
    CREATE_POST_FAIL,
    CREATE_POST_SUCCESS,
    DELETE_POST,
    FETCH_POSTS,
    LIKE_POST,
    START_POSTS_FETCHING,
    STOP_POSTS_FETCHING,
    FETCH_POSTS_ERROR,
    FETCH_POSTS_SUCCESS,
    LIKE_POST_SUCCESS,
    LIKE_POST_FAIL,
    DELETE_POST_FAIL,
    DELETE_POST_SUCCESS,
    DELETE_POST_START,
    DELETE_POST_STOP
} from './type';


export default Object.freeze({
    fetchPosts: (payload) => ({
        type: FETCH_POSTS, payload
    }),
    createPost: (payload) => ({
        type: CREATE_POST,
        payload
    }),
    createPostStart: () => ({
        type: CREATE_POST_START
    }),
    createPostStop: () => ({
        type: CREATE_POST_STOP
    }),
    createPostSuccess: (payload) => ({
        type: CREATE_POST_SUCCESS, payload
    }),
    createPostFail: () => ({
        type: CREATE_POST_FAIL
    }),
    deletePost: (payload) => ({
        type: DELETE_POST,
        payload
    }),
    deletePostStart: () => ({
        type: DELETE_POST_START
    }),
    deletePostStop: () => ({
        type: DELETE_POST_STOP
    }),
    deletePostSuccess: (payload) => ({
        type: DELETE_POST_SUCCESS, payload
    }),
    deletePostFail: (payload) => ({
        type: DELETE_POST_FAIL, payload
    }),
    likePost: (payload) => ({
        type: LIKE_POST, payload
    }),
    likePostSuccess: (payload) => ({
        type: LIKE_POST_SUCCESS, payload
    }),
    likePostFail: (payload) => ({
        type: LIKE_POST_FAIL, payload
    }),
    startPostsFetching: () => ({
        type: START_POSTS_FETCHING
    }),
    stopPostsFetching: () => ({
        type: STOP_POSTS_FETCHING
    }),
    fetchPostsError: () => ({
        type: FETCH_POSTS_ERROR
    }),
    fetchPostsSuccess: (payload) => ({
        type: FETCH_POSTS_SUCCESS, payload
    }),
    stopPostCreation: () => ({
        type: STOP_POSTS_FETCHING
    })
});

// export const createPost = (msg) => async (dispatch, getState) => {
//     const { api, token } = getState().profile;
//
//     const response = await fetch(api, {
//         method:  'POST',
//         headers: {
//             'Content-Type':  'application/json',
//             'Authorization': token
//         },
//         body: JSON.stringify({ comment: msg })
//     });
//
//     if (response.status !== 200) {
//         dispatch({
//             type: CREATE_POST_FAIL
//         });
//     }
//
//     const { data } = await response.json();
//
//     dispatch({
//         type:    CREATE_POST,
//         payload: data
//     });
// };
//
// /**
//  *
//  * @param {string} id - posts id
//  * @returns {function(*, *)} delete posts action creator
//  */
// export const deletePost = (id) => async (dispatch, getState) => {
//     const { api, token } = getState().profile;
//     const response = await fetch(`${api}/${id}`, {
//         method:  'DELETE',
//         headers: {
//             'Content-Type':  'application/json',
//             'Authorization': token
//         }
//     });
//
//     if (response.status !== 200) {
//         const { message } = await response.json();
//
//         dispatch({
//             type:    DELETE_POST_FAIL,
//             payload: message
//         });
//
//     } else {
//         dispatch({
//             type:    DELETE_POST,
//             payload: id
//         });
//     }
// };
//
// /**
//  * fetch posts action creator
//  *
//  * @return {function(*, *)} fetch posts action creator
//  */
// export const fetchPosts = () => async (dispatch, getState) => {
//     const { api } = getState().profile;
//
//     const response = await fetch(api);
//
//     if (response.status !== 200) {
//         throw new Error(`error:${response.message}`);
//     }
//
//     const data = await response.json();
//
//     const { data: posts } = data;
//
//     dispatch({
//         type:    FETCH_POSTS,
//         payload: posts
//     });
// };
//
// /**
//  * like/dislike posts action creator
//  *
//  * @param {string} id - posts id
//  *
//  * @return {function(*, *)} action creator
//  */
// export const likePost = (id) => async (dispatch, getState) => {
//     const { api, token } = getState().profile;
//
//     const response = await fetch(`${api}/${id}`, {
//         method:  'PUT',
//         headers: {
//             'Content-Type':  'application/json',
//             'Authorization': token
//         }
//     });
//
//     if (response.status !== 200) {
//         dispatch({
//             type:    LIKE_POST_FAIL,
//             payload: id
//         });
//     }
//
//     const { data } =  await response.json();
//
//     dispatch({ type: LIKE_POST, payload: { postId: id, data }});
// };
