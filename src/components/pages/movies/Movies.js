import React, { useEffect } from 'react';
import {useDispatch, useSelector} from'react-redux'
import {Container, Row} from 'react-bootstrap'
import Movie from '../movie/Movie';
import { movieApifetch } from '../../redux/movieSlice';
const Movies = () => {
    const movie = useSelector((state) => state.movie.movies);
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(movieApifetch());
    }, []);
    return (
      <>
        <Container>
          <h3>{movie.length}</h3>
          <Row xs={2} md={4} lg={4}>
            {movie.map((singleMovie) => (
              <Movie key={singleMovie.id} singleMovie={singleMovie}></Movie>
            ))}
          </Row>
        </Container>
      </>
    );
};

export default Movies;