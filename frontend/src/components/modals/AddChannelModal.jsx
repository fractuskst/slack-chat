import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useGetChannelsQuery, useCreateChannelMutation } from '../../store/api/channelsApi.js';
import makeSchema from '../../helpers/modalValidation.js';
import { setActive } from '../../store/slices/channelsSlice.js';
import { closeModal } from '../../store/slices/modalsSlice.js';

const AddChannel = () => {
  const dispatch = useDispatch();
  const [createChannel] = useCreateChannelMutation();
  const { data: channels } = useGetChannelsQuery();
  const schema = makeSchema(channels);
  const inputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: schema,
    validateOnChange: false,

    onSubmit: async (values) => {
      try {
        createChannel(values.name).then(({ data }) => {
          dispatch(setActive(data));
          dispatch(closeModal());
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Modal centered show="true" onHide={() => dispatch(closeModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              id="name"
              isInvalid={formik.errors.name}
              ref={inputRef}
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <Form.Label className="visually-hidden" htmlFor="name">
              Имя канала
            </Form.Label>
            <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="d-flex justify-content-end">
            <Button
              className="me-2"
              variant="secondary"
              type="button"
              onClick={() => dispatch(closeModal())}
            >
              Отменить
            </Button>
            <Button type="submit">Отправить</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddChannel;
