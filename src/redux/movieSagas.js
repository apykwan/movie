import {takeLatest, put, fork, call } from 'redux-saga/effects';

import { fetchMovies, fetchMovie } from './api';
import { getMovies, setMovies, getMovie, setMovie } from './feature/movieSlice';

function* onLoadMoviesAsync({ payload }) {
    try {
        const movieName = payload;
        const response = yield call(fetchMovies, movieName);
        if (response.status === 200) {
            yield put(setMovies({ ...response.data }));
        }
    } catch (error) {
        console.log(error);
    }
} 

function* onLoadMovieAsync({ payload }) {
    try {
        const movieId = payload;
        const response = yield call(fetchMovie, movieId)
        if (response.status === 200) {
            yield put(setMovie({ ...response.data }));
        }
    } catch (error) {
        console.log(error);
    }
}

function* onLoadMovies() {
    yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

function* onLoadMovie() {
    yield takeLatest(getMovie.type, onLoadMovieAsync);
}


// fork is used to call a method , you pass a method and method is invoked
export const moviesSagas = [fork(onLoadMovies), fork(onLoadMovie)];