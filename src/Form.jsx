import React, { useState } from "react";

export default function Form() {
  const [state, setState] = useState();
  function handleChange(event) {
    setState(event.target.value.toUpperCase());
  }
  console.log(state);
  return (
    <div>
      {/* Form
      <form>
        <input
          style={{ width: "100%", font: "30px" }}
          type="text"
          placeholder="Name"
          value={state}
          onChange={handleChange}
        ></input>
      </form> */}
    </div>
  );
}
