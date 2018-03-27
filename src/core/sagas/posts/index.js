// Core
import { takeEvery, select } from 'redux-saga/effects';

// Instruments
import {
    CREATE_POST,
    DELETE_POST,
    FETCH_POSTS,
    LIKE_POST
} from '../../../actions/posts/types';
import { fetchPostsWorker } from './workers/fetchPosts/index';
import { createPostWorker } from './workers/createPost/index';
import { deletePostWorker } from './workers/deletePost';
import { likePostWorker } from './workers/likePost';

export default {
    * fetchPostsWatcher () {
        yield takeEvery(FETCH_POSTS, fetchPostsWorker);
    },
    * createPostWatcher () {
        yield takeEvery(CREATE_POST, createPostWorker);
    },
    * deletePostWatcher () {
        yield takeEvery(DELETE_POST, deletePostWorker);
    },
    * likePostWatcher () {
        yield takeEvery(LIKE_POST, likePostWorker);
    },
    * watchAndLog () {
        yield takeEvery('*', function* (action) {
            const state = yield select();

            console.log('action', action);
            console.log('state after', state);
        });
    }
};
