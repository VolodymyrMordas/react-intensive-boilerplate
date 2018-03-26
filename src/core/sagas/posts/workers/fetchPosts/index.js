// Core
import { call, put, select } from 'redux-saga/effects';

// Instruments
import postsActions from '../../../../../actions/posts/index';


export const selectExp = select((state) => state);

export function* fetchPostsWorker () {
    try {
        yield put(postsActions.startPostsFetching());

        const { posts, profile } = yield selectExp;

        const response = yield call(fetch, profile.api);

        const data = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error('fetch error');
        }

        yield put(postsActions.fetchPostsSuccess(data));
    } catch ({ message }) {
        yield put(postsActions.fetchPostsError(message));
    } finally {
        yield put(postsActions.stopPostsFetching());
    }
}
