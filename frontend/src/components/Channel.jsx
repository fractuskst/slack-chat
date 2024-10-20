/* eslint-disable object-curly-newline */
import React from 'react';
import { Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../store/slices/channelsSlice.js';
import { openModal } from '../store/slices/modalsSlice.js';

const Channel = ({ channel }) => {
  const { id, name, removable } = channel;
  const dispatch = useDispatch();
  const active = useSelector((state) => state.channels.activeChannel);

  return (
    <li className="nav-item w-100">
      <Dropdown className="d-flex" as={ButtonGroup}>
        <Button
          variant={active.name === name ? 'secondary' : 'light'}
          className="w-100 rounded-0 text-start text-truncate"
          onClick={() => dispatch(setActive(channel))}
        >
          <span className="me-1">#</span>
          {name}
        </Button>
        {removable && (
          <Dropdown.Toggle
            className="dropdown-btn"
            split
            variant={active.name === name ? 'secondary' : 'light'}
            id="dropdown-split-basic"
          >
            <span className="visually-hidden">Управление каналом</span>
          </Dropdown.Toggle>
        )}
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => dispatch(openModal({ id, name: 'remove' }))}>
            Удалить
          </Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(openModal({ id, name: 'rename' }))}>
            Переименовать
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
};

export default Channel;
