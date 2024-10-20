import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { VscAdd } from 'react-icons/vsc';
import Channels from '../components/Channels.jsx';
import Messages from '../components/Messages.jsx';
import Input from '../components/Input.jsx';
import { messagesApi, useGetMessagesQuery } from '../store/api/messagesApi.js';

const Chat = ({ socket }) => {
  const dispatch = useDispatch();
  const { data = [] } = useGetMessagesQuery();
  const { name } = useSelector((state) => state.channels.activeChannel);

  useEffect(() => {
    socket.on('newMessage', (message) => {
      dispatch(
        messagesApi.util.updateQueryData('getMessages', undefined, (draft) => {
          draft.push(message);
        })
      );
    });

    return () => {
      socket.off('newMessage');
    };
  }, [socket, dispatch]);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Col xs={4} md={2} className="border-end px-0 bg-light flex-column h-100 d-flex">
          <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
            <b>Каналы</b>
            <Button size="sm" variant="outline-dark">
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
              <span className="text-muted">{`${data.length} сообщений`}</span>
            </div>
            <Messages />
            <div className="mt-auto px-5 py-3">
              <Input />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
