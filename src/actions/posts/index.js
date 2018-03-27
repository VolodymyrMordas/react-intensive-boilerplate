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
    DELETE_POST_STOP, LIKE_POST_START, LIKE_POST_STOP
} from './types';


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
    likePostStart: (payload) => ({
        type: LIKE_POST_START, payload
    }),
    likePostStop: () => ({
        type: LIKE_POST_STOP
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
