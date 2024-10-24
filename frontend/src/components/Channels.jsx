import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useGetChannelsQuery } from '../store/api/channelsApi.js';
import Channel from './Channel.jsx';

const Channels = () => {
  const { data = [], isLoading } = useGetChannelsQuery();

  return (
    <ul
      id="channels-box"
      className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
    >
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        data.map((channel) => <Channel key={channel.id} channel={channel} />)
      )}
    </ul>
  );
};
export default Channels;
