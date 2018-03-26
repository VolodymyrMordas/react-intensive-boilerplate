// Core
import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import { errorMessage, responseFail, setup } from '../../../../../../mock';
import { fetchPostsWorker, selectExp } from '../index';
import postsActions from '../../../../../../actions/posts/index';

setup();

const saga = cloneableGenerator(fetchPostsWorker)();

describe('SAGA TEST DISPATCH START_POSTS_FETCHING', () => {
    test(`SHOULD DISPATCH START_POSTS_FETCHING`, () => {
        expect(saga.next().value).toEqual(
            put(postsActions.startPostsFetching())
        );
    });

    test(`TEST SELECT STATE`, () => {
        expect(saga.next().value).toEqual(
            selectExp
        );
    });

    test(`TEST CALL FETCH`, () => {
        expect(saga.next().value).toEqual(
            call(fetch, '-->')
        );
    });

    test(`TEST OTHER`, () => {
        const clone = saga.clone();

        console.log(clone);
        expect(clone.next(responseFail).value).toEqual(
            put(postsActions.fetchPostsError(errorMessage))
        );
    });
});
