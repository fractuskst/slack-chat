import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Channels from '../components/Channels.jsx';

const Chat = () => (
  <Container className="h-100 my-4 overflow-hidden rounded shadow">
    <Row className="h-100 bg-white flex-md-row">
      <Col
        xs={4}
        md={2}
        className="border-end px-0 bg-light flex-column h-100 d-flex"
      >
        <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
          <b>Каналы</b>
        </div>
        <Channels />
      </Col>
    </Row>
  </Container>
);

export default Chat;
