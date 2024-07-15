import React from "react";
import axios from "axios";

// URL = "http://localhost:4000/organisers";
URL = "http://localhost:8000/user-api/register";

export const Post_User = async (data) => {
  console.log(data);
  const data_valid = Object.values(data).every((value) => value != "");
  var result = "";
  if (data_valid) {
    try {
      const response = await axios.post(URL, data);
      console.log(response.data);
      return response;
    } catch (error) {
      console.log("Unsuccessful");
      return (result = "unsuccessful");
    }
  }
};
