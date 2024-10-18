import React from 'react';
import { Nav, Spinner } from 'react-bootstrap';
import { useGetChannelsQuery } from '../store/api/channelsApi.js';
import Channel from './Channel.jsx';

const Channels = () => {
  const { data = [], isLoading } = useGetChannelsQuery();

  return (
    <Nav
      id="channels-box"
      className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
    >
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        data.map((channel) => {
          return <Channel key={channel.id} channel={channel} />;
        })
      )}
    </Nav>
  );
};
export default Channels;
