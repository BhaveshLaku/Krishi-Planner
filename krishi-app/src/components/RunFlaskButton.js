import React from "react";
import axios from "axios";

const YourComponent = () => {
  const handleRunFlaskClick = () => {
    axios
      .get("http://127.0.0.1:5000/run-flask")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error executing Flask Python file:", error);
      });
  };

  return (
    <div>
      <button onClick={handleRunFlaskClick}>Run Flask Python File</button>
    </div>
  );
};

export default YourComponent;
