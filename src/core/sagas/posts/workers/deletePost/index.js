import { call, put, select } from 'redux-saga/effects';

import postsActions from '../../../../../actions/posts/index';


export function* deletePostWorker ({ payload }) {
    try {
        yield put(postsActions.deletePostStart());

        const { api, token } = yield select((state) => state.profile);

        const options = {
            method:  'DELETE',
            headers: {
                'Content-Type':  'application/json',
                'Authorization': token
            }
        };

        const response = yield call(fetch, `${api}/${payload}`, options);

        if (response.status === 204) {
            yield put(postsActions.deletePostSuccess(payload));
        } else {
            yield put(postsActions.deletePostFail(response.message));
        }

    } catch ({ message }) {
        yield put(postsActions.deletePostFail(message));
    } finally {
        yield put(postsActions.deletePostStop());
    }
}
