import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getMovie } from '../redux/feature/movieSlice';

const Movie = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector(state => ({ ...state.movie }));
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    id && dispatch(getMovie(id))
  }, [id, dispatch]);

  return (
    <div style={{ marginTop: "5rem" }}>
      <img 
        src={movie.Poster}
        alt={movie.Title}
      />
      <h1>{movie.Title} <span>({movie.Year})</span></h1>
      <hr />
      <p style={{ width: "20rem" }}>{movie.Plot}</p>
      <hr />
      <button
        style={{ padding: "1.2rem", fontSize: "1rem", color: "orangered"  }} 
        onClick={() => navigate("/")}
      >
        Go Back
      </button>
    </div>
  )
}

export default Movie