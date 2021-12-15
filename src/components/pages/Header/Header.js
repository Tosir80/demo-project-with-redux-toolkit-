import React from 'react';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const state = useSelector((state) => state.movie.CartProduct);
    console.log(state)
    return (
      <div>
        <Navbar bg='light' expand='lg'>
          <Container>
            <Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id='navbarScroll'>
              <Nav
                className='ms-auto my-2 my-lg-0'
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link  to="/">Home</Link>
                <Nav.Link href='#action2'>Link</Nav.Link>
                <h6>
                  <Link to='/Cart'>
                    <Badge bg='secondary'>{state.length}</Badge>
                  </Link>
                </h6>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;