import React, { useState, useRef, useEffect } from "react";
import Cinput from "../../celements/inputs/Cinput";
import Cradio from "../../celements/radio/Cradio";
import Cbutton from "../../celements/buttons/Cbutton";
// import { Post_User } from "../../httphandlers/Httphandlers";
import Modalhandler from "../../celements/modalhandler/Modalhandler";
import styles from './AdminRegister.module.css'

const AdminRegister = () => {
  // states
  const [userData, setUserdata] = useState({
    firstname: "",
    lastname: "",
    address: "",
    pincode: "",
    username: "",
    gender: "",
    usermob: "",
    useremail: "",
  });

  const [userDataError, setUserdataError] = useState({
    errorfirstname: "Enter Your First Name",
    errorlastname: "Enter Your Last Name",
    erroraddress: "Enter Your address",
    errorpincode: "Enter Correct Pincode",
    errorgender: "Select a Gender",
    errorusername: "Enter your User Name",
    errorusermob: "Enter 10 Digit Mobile Number",
    erroruseremail: "Incorrect Email Format",
  });

  const userRef = useRef();

  const [errorStatus, setErrorStatus] = useState({
    username: false,
    usermob: false,
    useremail: false,
  });

  const [modalStatus, setModalStatus] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Handler Functions
  const handleData = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    if (typeof inputValue === "string") {
      inputValue = inputValue.toUpperCase();
    }
    setUserdata({ ...userData, [inputName]: inputValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const hasErrors = Object.values(errorStatus).some((status) => status);
    // if (hasErrors) {
    //   setModalMessage("Check Form for Errors");
    //   setModalStatus(true);
    //   return;
    // }
    // try {
    //   let response = await Post_User(userData);
    //   console.log(response.data.id);
    //   setModalMessage(`Submitted with ID : ${response.data.id}`);
    //   setModalStatus(true);
    // } catch (error) {
    //   setModalMessage("Probable Network Error");
    //   setModalStatus(true);
    // }
    alert("user Registered")
  };

  const setFieldErrorStatus = (field, status) => {
    setErrorStatus((prevStatus) => ({ ...prevStatus, [field]: status }));
  };

  return (
    <div className={styles.formContainer}>
      {modalStatus && <Modalhandler message={modalMessage} />}
      <h1 className={styles.formHeaders}>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formHolder}>
          <div className={styles.section_one}>
            <Cinput
              id="signup_firstname"
              type="text"
              title="First Name"
              name="firstname"
              placeholder="First Name"
              value={userData.firstname}
              onChange={(value) => handleData(value)}
              errorMessage={userDataError.errorfirstname}
              setErrorStatus={(status) =>
                setFieldErrorStatus("firstname", status)
              }
              ref={userRef}
            />
            <Cinput
              id="signup_lastname"
              title="Last Name"
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={userData.lastname}
              onChange={(value) => handleData(value)}
              errorMessage={userDataError.errorlastname}
              setErrorStatus={(status) =>
                setFieldErrorStatus("lastname", status)
              }
            />
            <Cinput
              id="signup_address"
              title="Address"
              type="text"
              name="address"
              placeholder="Address"
              value={userData.address}
              onChange={(value) => handleData(value)}
              errorMessage={userDataError.erroraddress}
              setErrorStatus={(status) =>
                setFieldErrorStatus("useremail", status)
              }
            />
            <Cinput
              id="signup_pincode"
              title="Pincode"
              type="number"
              name="pincode"
              placeholder="Pincode Code"
              value={userData.pincode}
              onChange={(value) => handleData(value)}
              errorMessage={userDataError.errorpincode}
              setErrorStatus={(status) =>
                setFieldErrorStatus("pincode", status)
              }
            />
          </div>
          <div className={styles.section_two}>
            <Cinput
              id="signup_username"
              type="text"
              title="Username"
              name="username"
              placeholder="Username"
              value={userData.username}
              onChange={(value) => handleData(value)}
              errorMessage={userDataError.errorusername}
              setErrorStatus={(status) =>
                setFieldErrorStatus("username", status)
              }
            />
            <Cradio
              title="Gender"
              name="gender"
              options={[
                { label: "Male", value: "M" },
                { label: "Female", value: "F" },
                { label: "Others", value: "O" },
              ]}
              value={userData.gender}
              onChange={(value) => handleData(value)}
              errorMessage={userDataError.errorgender}
              setErrorStatus={(status) => setFieldErrorStatus("gender", status)}
              required={true}
            />
            <Cinput
              id="signup_mobile"
              title="Mobile Number"
              type="tel"
              name="usermob"
              placeholder="Mobile Number"
              value={userData.usermob}
              onChange={(value) => handleData(value)}
              errorMessage={userDataError.errorusermob}
              setErrorStatus={(status) =>
                setFieldErrorStatus("usermob", status)
              }
            />
            <Cinput
              id="signup_email"
              title="Email ID"
              type="email"
              name="useremail"
              placeholder="Email ID"
              value={userData.useremail}
              onChange={(value) => handleData(value)}
              errorMessage={userDataError.erroruseremail}
              setErrorStatus={(status) =>
                setFieldErrorStatus("useremail", status)
              }
            />
          </div>
        </div>
        <Cbutton type="submit" title="Sign-Up" width="50%" />
      </form>
    </div>
  );
};

export default AdminRegister;
