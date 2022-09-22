import { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    // <React.Fragment>
    //   <BackDrop />
    //   <ModalOverlay>{props.children}</ModalOverlay>
    // </React.Fragment>
    <Fragment>
      {createPortal(
        <BackDrop onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
