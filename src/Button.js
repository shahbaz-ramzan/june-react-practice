import React from "react";

export default function Button(props) {
  return (
    <>
      <h1>MyApp</h1>
      <h1>{props.string}</h1>
      <span style={{ backgroundColor: "red", color: "white" }}>
        Hello world !
      </span>
    </>
  );
}
