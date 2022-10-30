import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MoviesList = () => {
    const { moviesList } = useSelector(state => ({...state.movie}));
    return (
        <div style={{
            width: "70vw",
            marginTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
        }}>
            {moviesList?.Search?.map((item) => (
                <Link
                    to={`/movie/${item.imdbID}`} 
                    key={item.imdbID}
                    style={{ margin: "1rem", boxShadow: "1rgba(0, 0, 0, 0.45) 0px 5px 15px" }}
                >
                    <img src={item.Poster} alt={item.Title} />
                    <h2>{item.Title}</h2>
                </Link>
            ))}
        </div>
    );
};

export default MoviesList;