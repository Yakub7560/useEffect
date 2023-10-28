import React, { useEffect, useState } from "react";
import './task6.css';
const Task6 = () => {


   const [count, setCount] = useState(0);


   useEffect(() => {
      localStorage.setItem("count", count);
   }, [count])
   const increment = () => {
      setCount(count => count + 1);

   }

   const decrement = () => {
      if (count > 0) {
         setCount(count => count - 1);

      }


   }
   const resetit = () => {
      setCount(0);

   }
   return (
      <div className="container">
         <div className="counter">{count}</div>
         <div className="bnts">
            <button onClick={decrement}>-1</button>
            <button onClick={increment}>+1</button>
         </div>

         <button onClick={resetit}>Reset</button>


      </div>
   )
}


export default Task6;