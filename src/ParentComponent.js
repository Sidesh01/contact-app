import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const myRef = useRef();

  return (
    <div>
      {/* Pass the reference variable as a prop */}
      <ChildComponent innerRef={myRef} />
    </div>
  );
}

export default ParentComponent;
