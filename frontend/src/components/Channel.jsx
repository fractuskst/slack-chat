/* eslint-disable object-curly-newline */
import React from 'react';
import { NavItem, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../store/slices/channelsSlice.js';

const Channel = ({ channel }) => {
  const { id, name, removable } = channel;
  const dispatch = useDispatch();
  const active = useSelector((state) => state.channels.activeChannel);
  return (
    <NavItem className="w-100">
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
      </Dropdown>
    </NavItem>
  );
};

export default Channel;
