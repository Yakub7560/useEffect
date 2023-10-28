import React, { useEffect, useState } from "react";


const Task5 = () => {

   const [rand, setRand] = useState(0);
   const [name, setName] = useState("");
   const [times, setTimes] = useState(2);


   const handleClick = () => {
      setName(name + "y");
   }

   const randomNum = () => {
      setRand(Math.floor(Math.random() * 100));
   }
   useEffect(() => {

      setTimes(times=>times + 1);
   }, [name]);

   return (
      <>

         <div>Welcome Cool guy{name}!</div>
         <div>Your lucky number is {rand} </div>
         <div>Name has changed {times} times</div>

         <button onClick={handleClick}>Change Name</button>
         <button onClick={randomNum}>Get New Lucky Number</button>
      </>
   )
}


export default Task5;