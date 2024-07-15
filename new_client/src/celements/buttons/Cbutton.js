import React from "react";

const Cbutton = (props) => {
 
  const buttonStyle = {
    width: props.width,
    padding: "10px",
    marginTop: "20px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    transition: "background-color 0.3s ease-in-out, border-color 0.3s ease-in-out",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    gap: "5px"
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b9"
  };

  return (
    <div>
      <button
        type={props.type || "button"}
        // onClick={(event) => props.onClick(event)}
        style={{ ...buttonStyle }}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      >
        {props.icon && <span>{props.icon}</span>}
        {props.title}
      </button>
    </div>
  );
};

export default Cbutton;
