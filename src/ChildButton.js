import React from "react";

export default function ChildButton(props) {
  return (
    <>
      <button onClick={props.onClick}>Click Me</button>
    </>
  );
}
