import { Icon, Modal } from "semantic-ui-react";
import "./BasicModal.scss";

export const BasicModal = (props) => {
  const { show, onClose, title, size, children } = props;

  return (
    <Modal open={show} size={size} onClose={onClose} className="basic-modal">
      <Modal.Header>
        <div />

        <span>{title}</span>

        <Icon name="close" onClick={onClose} link />
      </Modal.Header>

      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};

BasicModal.defaultProps = {
  size: "tiny",
};
