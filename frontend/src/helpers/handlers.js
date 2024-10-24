import { useDispatch } from 'react-redux';
import { messagesApi } from '../store/api/messagesApi.js';
import { channelsApi } from '../store/api/channelsApi.js';

const useHandlers = () => {
  const dispatch = useDispatch();

  const createMessage = (payload) => {
    dispatch(
      messagesApi.util.updateQueryData('getMessages', undefined, (draft) => {
        draft.push(payload);
      }),
    );
  };

  const createChannel = (payload) => {
    dispatch(
      channelsApi.util.updateQueryData('getChannels', undefined, (draft) => {
        draft.push(payload);
      }),
    );
  };

  const removeChannel = (payload) => {
    dispatch(
      channelsApi.util.updateQueryData(
        'getChannels',
        undefined,
        (draft) => draft.filter((channel) => channel.id !== payload.id),
      ),
    );
  };

  const renameChannel = (payload) => {
    dispatch(
      channelsApi.util.updateQueryData('getChannels', undefined, (draft) => (
        draft.map((channel) => {
          if (payload.id === channel.id) {
            return { ...channel, name: payload.name };
          }
          return channel;
        }))),
    );
  };

  return {
    createMessage,
    createChannel,
    removeChannel,
    renameChannel,
  };
};

export default useHandlers;
