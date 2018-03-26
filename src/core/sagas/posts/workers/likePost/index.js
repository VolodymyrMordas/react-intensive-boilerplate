// Core
import { call, put, select } from 'redux-saga/effects';

// Instruments
import postsActions from '../../../../../actions/posts/index';

export function* likePostWorker () {
    try {
        // yield put(postsActions.likePost());
        //
        // const { data: posts } = yield select((state) => state.posts);
        // const { api } = yield select((state) => state.profile);
        //
        // if (posts.length) {
        //     throw new Error('posts loaded, no need to refetch');
        // }
        //
        // const response = yield call(fetch, api);
        //
        // if (response.status !== 200) {
        //     throw new Error('fetch error');
        // }
        //
        // const data = yield call([response, response.json]);
        //
        // yield put(postsActions.fetchPostsSuccess(data));
        console.log('-->likePostWorkerSuccess');
    } catch ({ message }) {
        console.log('-->likePostWorkerFail');
        yield put(postsActions.likePostFail(message));
    } finally {
        console.log('-->likePostWorkerFinally');
    }
}
