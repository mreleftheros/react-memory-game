import { createPortal } from 'react-dom';

const Modal = ({ children, onClose = null }) => {
  return createPortal(
    <div className='modal'>
      <div className='modal-box'>
        {children}
        {!!onClose && (
          <button className='modal-close' onClick={onClose}>
            x
          </button>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
