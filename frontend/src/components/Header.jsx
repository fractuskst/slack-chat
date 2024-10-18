import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ROUTES } from '../routes/routes.js';
import { logOut } from '../store/slices/authSlise.js';

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  return (
    <Navbar expand="lg" className="shadow-sm navbar bg-white">
      <Container>
        <Link className="navbar-brand" to={ROUTES.chat}>
          Chat
        </Link>
        {token && <Button onClick={() => dispatch(logOut())}>Выйти</Button>}
      </Container>
    </Navbar>
  );
};

export default Header;
