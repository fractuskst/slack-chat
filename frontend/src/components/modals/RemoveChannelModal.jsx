import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useRemoveChannelMutation } from '../../store/api/channelsApi.js';
import { setActive, initialState } from '../../store/slices/channelsSlice.js';
import { closeModal } from '../../store/slices/modalsSlice.js';

const RemoveChannel = () => {
  const dispatch = useDispatch();
  const [removeChannel] = useRemoveChannelMutation();
  const channelId = useSelector((state) => state.modals.data);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await removeChannel(channelId);
      dispatch(setActive(initialState.activeChannel));
      dispatch(closeModal());
      toast.success(t('toasts.channelRemove'));
    } catch (err) {
      console.error(err);
      toast.error(t('errors.connection'));
    }
  };

  return (
    <Modal centered show="true" onHide={() => dispatch(closeModal())}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.removeChannel')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <p className="lead">{t('modals.confirm')}</p>
          <Form.Group className="d-flex justify-content-end">
            <Button
              className="me-2"
              variant="secondary"
              type="button"
              onClick={() => dispatch(closeModal())}
            >
              {t('modals.cancel')}
            </Button>
            <Button variant="danger" type="submit">
              {t('modals.removeChannel')}
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveChannel;
