import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { singleMovie, addToCart } from '../../redux/movieSlice';
import { Button, Col, Container, Row } from 'react-bootstrap';

import './singleMovie.css'
const SingleMovie = () => {
    const params = useParams();
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(singleMovie(params.id));
    }, [dispatch]);
    const singleItem = useSelector(state => state.movie.singleMovie)
  const {Poster,Title,Type,Year,imgbID} =singleItem
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <img src={Poster} alt='' />
            </Col>
            <Col>
              <div className='movie'>
                <h3>{Title}</h3>
                <p>{Type}</p>
                <h6>{Year}</h6>
                <Button onClick={() => dispatch(addToCart(singleItem))}>
                  Watch List
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default SingleMovie;