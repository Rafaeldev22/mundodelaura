import React from "react";
import "./Modal.css";

import { motion } from "framer-motion";

const Modal = ({ show, onClose, videoSrc, name }) => {
  if (!show) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
      transition={{ duration: 0.5 }}
      className="modal-backdrop"
    >
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">
          X
        </button>
        <div className="modal-video">
          <h3>{name}</h3>
          <iframe
            width="600"
            height="355"
            src={videoSrc}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
