import AddChannel from '../components/modals/AddChannelModal.jsx';
import RemoveChannel from '../components/modals/RemoveChannelModal.jsx';
import RenameChannel from '../components/modals/RenameChannelModal.jsx';

const renderModal = (name) => {
  const modals = {
    add: AddChannel,
    remove: RemoveChannel,
    rename: RenameChannel,
  };
  if (!name) {
    return null;
  }
  const Modal = modals[name];
  return <Modal />;
};

export default renderModal;
