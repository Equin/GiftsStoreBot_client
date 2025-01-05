import React, { useState } from 'react';
import './modal.css';

const Modal = ({ onClose, children, icon }) => {

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onClose: onClose });
    }
    return child;
  });


  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        
        {childrenWithProps}
      </div>
    </div>
  );
};

const ModalWindow = ({ children, icon }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <img
        src={icon}
        alt="Click Me"
        onClick={handleImageClick}
      />

{modalOpen && (
        <Modal onClose={closeModal}>
          {children}
        </Modal>
) }
    </div>
  );
};

export default ModalWindow;