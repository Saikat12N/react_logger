import React, { useState, useEffect, forwardRef } from "react";
import styles from "./Cinput.module.css";
import {
  mobnum_validator,
  email_validator,
  quantity_validator,
  pin_validator,
  post_date_validator,
  pre_date_validator,
} from "../validators/validator";

const Cinput = forwardRef((props, ref) => {
  const [haveError, setHaveError] = useState(false);

  const validateInput = (value) => {
    let isValid = true;
    switch (props.type) {
      case "text":
        isValid = value ? true : false;
        break;
      case "tel":
        isValid = mobnum_validator(value);
        break;
      case "email":
        isValid = email_validator(value);
        break;
      case "number":
        if(props.name){
          isValid= pin_validator(value)
        }else if(props.quantity){
        isValid = quantity_validator(value);
        }
        break
      case "date":
        if (props.name === "postDate") {
          isValid = post_date_validator(value);
        } else if (props.name === "preDate") {
          isValid = pre_date_validator(value);
        }
        break;
      default:
        isValid = true;
        break;
    }

    setHaveError(!isValid);
    props.setErrorStatus(!isValid);
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>{props.title}</label>
      {haveError && (
        <span className={styles.errorMessage}>({props.errorMessage})</span>
      )}
      <input
        className={styles.customInput}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => {
          props.onChange(event);
          validateInput(event.target.value);
        }}
        ref={ref}
        required
      />
    </div>
  );
});

export default Cinput;
