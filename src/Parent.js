import React, { useState } from "react";
import Children from "./Children";

export default function Parent() {
  const [plus, setPlus] = useState(1);

  const handleButtonClick = () => {
    console.log("hdle button messgae");
  };
  const plusfoo = () => {
    setPlus(plus + 1);

    console.log(plus);
  };
  return (
    <>
      <Children onClick={handleButtonClick} />
      <Children onClick={plusfoo} />
    </>
  );
}
