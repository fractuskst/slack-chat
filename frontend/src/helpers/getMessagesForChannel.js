const getMessagesForChannel = (id, messages) => {
  if (messages.length === 0) {
    return messages;
  }
  return messages.filter((message) => message.channelId === id);
};

export default getMessagesForChannel;
