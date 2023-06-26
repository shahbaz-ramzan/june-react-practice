import React, { useRef } from 'react';

const UncontrolledComponent = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    const value = inputRef.current.value;
    console.log('Input value:', value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
};

export default UncontrolledComponent;
