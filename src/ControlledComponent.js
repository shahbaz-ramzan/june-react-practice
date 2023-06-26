import React, { useState } from "react";
import UncontrolledComponent from "./UnControlled";

const ControlledComponent = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Value: {value}</p>
      <UncontrolledComponent />
    </div>
  );
};

export default ControlledComponent;
