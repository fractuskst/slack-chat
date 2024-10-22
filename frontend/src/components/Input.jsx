/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useRef, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { VscSend } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';
import { useCreateMessageMutation } from '../store/api/messagesApi.js';

const Input = () => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);
  const { id } = useSelector((state) => state.channels.activeChannel);
  const username = useSelector((state) => state.auth.username);
  const [createMessage] = useCreateMessageMutation();
  const { t } = useTranslation();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMessage({ body: text, id, username });
    setText('');
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Form onSubmit={handleSubmit} className="py-1 border rounded-2">
      <Form.Group className="input-group has-validation">
        <Form.Control
          ref={inputRef}
          name="body"
          aria-label="Новое сообщение"
          placeholder="Введите сообщение..."
          className="border-0 p-0 ps-2"
          onChange={handleChange}
          value={text}
        />
        <Button
          variant="outline-dark"
          className="btn-group-vertical"
          type="submit"
          disabled={text.length === 0}
        >
          <VscSend />
          <span className="visually-hidden">{t('tips.send')}</span>
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Input;
