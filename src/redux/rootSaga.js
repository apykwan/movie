import { all } from 'redux-saga/effects';

import { moviesSagas } from './movieSagas';

// all when you need to run multiple sagas

export default function* rootSaga() {
    yield all([...moviesSagas]);
}