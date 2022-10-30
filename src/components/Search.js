import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMovies } from '../redux/feature/movieSlice';

const Search = () => {
    const [name, setName] = useState("spider");
    const dispatch = useDispatch();
    const { moviesList: { Error: error } } = useSelector(state => ({...state.movie}));
    
    useEffect(() => {
         dispatch(getMovies(name));
    }, [name, dispatch]);

    return (
        <>
            <h2>Movie Search App</h2>
            <form onSubmit={e => e.preventDefault()}>
                <input onChange={e => setName(e.target.value)} />
                {error && <p>{error}</p>}
            </form>
        </>
    );
}

export default Search;