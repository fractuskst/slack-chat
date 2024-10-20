import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useGetMessagesQuery } from '../store/api/messagesApi.js';
import Message from './Message.jsx';

const Messages = () => {
  const { data = [], isLoading } = useGetMessagesQuery();
  return (
    <div id="messages-box" className="chat-messages overflow-auto px-5">
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        data.map((message) => {
          return <Message key={message.id} message={message} />;
        })
      )}
    </div>
  );
};

export default Messages;
