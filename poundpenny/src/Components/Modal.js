import React from 'react';


const Modal = ({ modalId, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal" id={modalId}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
