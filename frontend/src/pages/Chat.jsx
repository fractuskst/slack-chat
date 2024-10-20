/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { VscAdd } from 'react-icons/vsc';
import Channels from '../components/Channels.jsx';
import Messages from '../components/Messages.jsx';
import Input from '../components/Input.jsx';
import { useGetMessagesQuery } from '../store/api/messagesApi.js';
import { openModal } from '../store/slices/modalsSlice.js';
import renderModal from '../helpers/renderModal.jsx';
import getMessagesForChannel from '../helpers/getMessagesForChannel.js';

const Chat = () => {
  const dispatch = useDispatch();
  const { data = [] } = useGetMessagesQuery();
  const { name, id } = useSelector((state) => state.channels.activeChannel);
  const messagesForChannel = getMessagesForChannel(id, data);
  const modalName = useSelector((state) => state.modals.name);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Col xs={4} md={2} className="border-end px-0 bg-light flex-column h-100 d-flex">
          <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
            <b>Каналы</b>
            <Button
              onClick={() => dispatch(openModal({ name: 'add' }))}
              size="sm"
              variant="outline-dark"
            >
              <VscAdd />
              <span className="visually-hidden">+</span>
            </Button>
          </div>
          <Channels />
        </Col>
        <Col className="h-100 p-0">
          <div className="d-flex flex-column h-100">
            <div className="bg-light mb-4 p-3 shadow-sm small">
              <p className="m-0">
                <b>{`# ${name}`}</b>
              </p>
              <span className="text-muted">{`${messagesForChannel.length} сообщений`}</span>
            </div>
            <Messages />
            <div className="mt-auto px-5 py-3">
              <Input />
            </div>
          </div>
        </Col>
      </Row>
      {renderModal(modalName)}
    </Container>
  );
};

export default Chat;
