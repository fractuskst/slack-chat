import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { useGetMessagesQuery } from '../store/api/messagesApi.js';
import Message from './Message.jsx';
import getMessagesForChannel from '../helpers/getMessagesForChannel.js';

const Messages = () => {
  const { data = [], isLoading } = useGetMessagesQuery();
  const { id } = useSelector((state) => state.channels.activeChannel);
  const messagesForChannel = getMessagesForChannel(id, data);

  return isLoading ? (
    <Spinner animation="border" variant="primary" />
  ) : (
    <div id="messages-box" className="chat-messages overflow-auto px-5">
      {messagesForChannel.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default Messages;
