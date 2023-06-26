import React from "react";
import ControlledComponent from "./ControlledComponent";


export default function Children(props) {
  return (
    <>
      <h1>Helloee</h1>
      <button onClick={props.onClick}>Click Me</button>
      <button onClick={props.onClick}>PLUS</button>
      <ControlledComponent/>
    </>
  );
}
