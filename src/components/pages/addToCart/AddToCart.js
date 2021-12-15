import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/movieSlice';

const AddToCart = () => {
    const cart = useSelector((state) => state.movie.CartProduct);
    const dispatch=useDispatch()
    return (
      <div>
        <Container>
          <h3>Your Cart{cart.length}</h3>
          <div>
            {cart.map((si,index) => (
              <div>
                <div className='my-2 d-md-flex align-items-center justify-content-around'>
                  <img width='100px' src={si.Poster} alt='' />
                  <h3>{si.Title}</h3>
                  <p>{si.Year}</p>
                  <p>{si.Type}</p>
                  <Button onClick={() => dispatch(removeFromCart(si.imdbID))}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
};

export default AddToCart;