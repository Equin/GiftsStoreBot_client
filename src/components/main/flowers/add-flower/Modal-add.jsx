import React, { useState } from 'react';
import './Modal-add.css';

const ModalAdd = ({ onClose, children }) => {

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onClose: onClose });
    }
    return child;
  });

  return (
    <div id='component-container'  className="add-modal">
      <div className="add-modal-content">
        <span className="add-close" onClick={onClose}>&times;</span>
        {childrenWithProps}
      </div>
    </div>
  );
};

const ModalWindowAdd = ({ buttonName, children, buttonClassName, addButtonKlassName = "add-button" }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
   
  };

  return (

    buttonClassName ?
      <div className={buttonClassName}>
        <button className={addButtonKlassName} onClick={openModal}>
          {buttonName}

        </button>
        {modalOpen && (
          <ModalAdd key ={buttonClassName} onClose={closeModal}>
            {children}
          </ModalAdd>
        )}
      </div>

      :
      <>

        <button className={addButtonKlassName} onClick={openModal}>
          {buttonName}
        </button>
          {modalOpen && (
            <ModalAdd key ={buttonClassName} onClose={closeModal}>
              {children}
            </ModalAdd>
          )}
      </>
  );
};

export default ModalWindowAdd;
