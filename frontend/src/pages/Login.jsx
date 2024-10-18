/* eslint-disable object-curly-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LoginForm from '../components/LoginForm.jsx';
import { ROUTES } from '../routes/routes.js';
import loginImage from '../images/loginImage.jpeg';

const Login = () => (
  <Container fluid className="h-100">
    <Row className="justify-content-center align-content-center h-100">
      <Col xs={12} md={8} xxl={6}>
        <Card className="shadow-sm">
          <Card.Body className="row p-5">
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              <img src={loginImage} alt="loginImage" />
            </Col>
            <LoginForm />
          </Card.Body>
          <Card.Footer className="p-4">
            <div className="text-center">
              <span>Нет аккаунта? </span>
              <Link to={ROUTES.signUp}>Регистрация</Link>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Login;
