import React from "react";

export default function Child(props) {
  return (
    <div>
      <h1>Child:</h1>
      <h1>{props.fName}</h1>
      <h2>{props.lName}</h2>
      <h1>{props.age}</h1>
    </div>
  );
}
