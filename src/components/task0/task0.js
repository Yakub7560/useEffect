import React, { useState, useEffect } from "react";

const Task0 = () => {
  const [count, setCount] = useState(0);
  const [coordination, setCord] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const handleWindowMouseMove = event => {
      setCord({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove,);
    };
  }, []);

  const handleclick = () => {
    setCount(count => count + 1);
  }
  return (
    <>
      <h2>You clicked {count} times</h2>
      <button onClick={handleclick}>Click Me!</button>
      <div>X position: {coordination.x} </div>
      <div>Y position: {coordination.y}</div>
    </>
  );
};

export default Task0;



