import React, { useCallback, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FiX } from 'react-icons/fi';

type Props = {
  show: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = (props: Props) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        props.onClose();
      }
    },
    [props]
  );

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal-kemitraan" onClick={props.onClose}>
        <div
          className="modal-content-kemitraan"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header-kemitraan">
            <h4 className="modal-title-kemitraan font-semibold text-xl">
              {props.title}
            </h4>
            <FiX
              onClick={props.onClose}
              className="hover:cursor-pointer"
              size={30}
            />
          </div>
          <div className="modal-body-kemitraan">{props.children}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
