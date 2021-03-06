import React from "react"
import ReactDOM from "react-dom"

import classes from "./Modal.module.css"

const Backdrop = props => {
  const className = [classes.backdrop]

  if (props.className) className.push(props.className)

  return (
    <div onClick={props.onBackdropClick} className={className.join(" ")}></div>
  )
}

const ModalOverlay = props => (
  <div className={`${classes.modal} ${props.className}`}>{props.children}</div>
)

const Modal = props => {
  return props.show ? (
    <>
      {ReactDOM.createPortal(
        <Backdrop {...props} />,
        document.getElementById("root-backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay {...props} />,
        document.getElementById("root-overlay")
      )}
    </>
  ) : null
}

export default Modal
