// Core
import { call, put, select } from 'redux-saga/effects';

// Instruments
import postsActions from '../../../../../actions/posts/index';

export function* createPostWorker (payload) {
    try {
        yield put(postsActions.createPostStart());

        const { payload: comment } = payload;

        const { api, token } = yield select((state) => state.profile);

        const options = {
            method:  'POST',
            headers: {
                'Content-Type':  'application/json',
                'Authorization': token
            },
            body: JSON.stringify({ comment })
        };

        const response = yield call(fetch, api, options);

        if (response.status !== 200) {
            yield put(postsActions.createPostFail(response.message));
        }

        const { data } = yield call([response, response.json]);

        yield put(postsActions.createPostSuccess(data));
    } catch ({ message }) {
        yield put(postsActions.createPostFail(message));
    } finally {
        yield put(postsActions.createPostStop());
    }
}
