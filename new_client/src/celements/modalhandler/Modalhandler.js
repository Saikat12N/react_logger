import React, { useState, useEffect } from "react";
import styles from "./Modalhandler.module.css"

const Modalhandler = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true)
    setTimeout(() => setIsModalOpen(false), 5000);  
  }, [props.message]);

  return (
    <>
      {isModalOpen && (
        // <div className={styles.modal-message}>
          <span className={styles.modalmessage}>{props.message}</span>
        // </div>
      )}
    </>
  );
};

export default Modalhandler;
