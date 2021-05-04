import React, { forwardRef, useImperativeHandle } from "react";
import "../scss/Modal.scss";
import ReactDOM from "react-dom";

interface IModalProps {
  isModal: boolean;
}

export const Modal: React.FC<IModalProps> = ({ isModal, children }) => {
  if (!isModal) return null;

  return ReactDOM.createPortal(
    <>
      <div className="wrapper">{children}</div>
    </>,
    document.body
  );
};


