import React from 'react';

function ChildComponent({ innerRef }) {
  const handleClick = () => {
    // Access the DOM element using the reference prop
    innerRef.current.style.backgroundColor = 'blue';
  };

  return (
    <div>
      {/* Use the reference prop */}
      <div ref={innerRef}>This is a div element in the child component</div>
      {/* Button to trigger the click event */}
      <button onClick={handleClick}>Change Background Color</button>
    </div>
  );
}

export default ChildComponent;
