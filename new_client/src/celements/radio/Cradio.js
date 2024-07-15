import React, { useState, useEffect } from "react";
import styles from "./Cradio.module.css";

const Cradio = (props) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setSelectedValue(props.value);
  }, [props.value]);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    props.onChange(event);
  };

  return (
    <div>
      <label className={styles.radioLabel}>{props.title} :</label>
      <div className={styles.radioContainer}>
        {props.options.map((option) => (
          <div key={option.value} className={styles.radioOption}>
            <input
              type="radio"
              name={props.name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleRadioChange}
              required={props.required}
            />
            <label className={styles.radioOptionLabel}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cradio;
