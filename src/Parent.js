import React from "react";
import Children from "./Children";

export default function Parent() {
  const handleButtonClick = () => {
    console.log("hdle button messgae");
  };

  return (
    <>
      <Children onClick={handleButtonClick} />
    </>
  );
}
