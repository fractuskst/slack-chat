/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { VscAdd } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';
import Channels from '../components/Channels.jsx';
import Messages from '../components/Messages.jsx';
import Input from '../components/Input.jsx';
import { useGetMessagesQuery } from '../store/api/messagesApi.js';
import { openModal } from '../store/slices/modalsSlice.js';
import renderModal from '../helpers/renderModal.jsx';
import getMessagesForChannel from '../helpers/getMessagesForChannel.js';
import socket from '../helpers/socket.js';
import useHandlers from '../helpers/handlers.js';

const Chat = () => {
  const { createMessage, createChannel, removeChannel, renameChannel } = useHandlers();
  const dispatch = useDispatch();
  const { data = [] } = useGetMessagesQuery();
  const { name, id } = useSelector((state) => state.channels.activeChannel);
  const messagesForChannel = getMessagesForChannel(id, data);
  const modalName = useSelector((state) => state.modals.name);
  const { t } = useTranslation();

  useEffect(() => {
    socket.on('newMessage', createMessage);
    socket.on('newChannel', createChannel);
    socket.on('removeChannel', removeChannel);
    socket.on('renameChannel', renameChannel);

    return () => {
      socket.off('newMessage', createMessage);
      socket.off('newChannel', createChannel);
      socket.off('removeChannel', removeChannel);
      socket.off('renameChannel', renameChannel);
    };
  }, [createMessage, createChannel, removeChannel, renameChannel]);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Col xs={4} md={2} className="border-end px-0 bg-light flex-column h-100 d-flex">
          <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
            <b>{t('chat.channels')}</b>
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
              <span className="text-muted">
                {t('chat.messages.message', { count: messagesForChannel.length })}
              </span>
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
