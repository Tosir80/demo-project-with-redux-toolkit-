import React from 'react';
import { Card, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Movie = ({singleMovie}) => {
  const { Title, Year, Poster, imdbID } = singleMovie;
    return (
      <>
        <Col>
          <Card className='m-2 ' >
            <Link to={`/details/${imdbID}`}>
              <Card.Img variant='top' src={Poster} />
              <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text>{Year}</Card.Text>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </>
    );
};

export default Movie;