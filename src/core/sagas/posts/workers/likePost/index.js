// Core
import { call, put, select } from 'redux-saga/effects';

// Instruments
import postsActions from '../../../../../actions/posts/index';

export function* likePostWorker ({ payload }) {
    try {
        yield put(postsActions.likePostStart());

        const { posts, profile } = yield select((state) => state);

        const options = {
            method:  'PUT',
            headers: {
                'Content-Type':  'application/json',
                'Authorization': profile.token
            }
        };

        const response = yield call(fetch, `${profile.api}/${payload}`, options);
        const { data } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error('fetch error');
        }

        yield put(postsActions.likePostSuccess(data));
    } catch ({ message }) {
        yield put(postsActions.likePostFail(message));
    } finally {
        yield put(postsActions.likePostStop());
    }
}
