import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useRemoveChannelMutation } from '../../store/api/channelsApi.js';
import { setActive, initialState } from '../../store/slices/channelsSlice.js';
import { closeModal } from '../../store/slices/modalsSlice.js';

const RemoveChannel = () => {
  const dispatch = useDispatch();
  const [removeChannel] = useRemoveChannelMutation();
  const channelId = useSelector((state) => state.modals.data);

  const handleSubmit = () => {
    removeChannel(channelId).then(() => {
      dispatch(setActive(initialState.activeChannel));
      dispatch(closeModal());
    });
  };

  return (
    <Modal centered show="true" onHide={() => dispatch(closeModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Удалить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <p className="lead">Уверены?</p>
          <Form.Group className="d-flex justify-content-end">
            <Button
              className="me-2"
              variant="secondary"
              type="button"
              onClick={() => dispatch(closeModal())}
            >
              Отменить
            </Button>
            <Button variant="danger" type="submit">
              Удалить
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveChannel;
