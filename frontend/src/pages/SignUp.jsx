/* eslint-disable object-curly-newline */
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SignUpForm from '../components/SignUpForm.jsx';
import signupImage from '../images/signupImage.jpg';

const SignUp = () => (
  <Container fluid className="h-100">
    <Row className="justify-content-center align-content-center h-100">
      <Col xs={12} md={8} xxl={6}>
        <Card className="shadow-sm">
          <Card.Body className="d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
            <div>
              <img src={signupImage} alt="Регистрация" />
            </div>
            <SignUpForm />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default SignUp;
