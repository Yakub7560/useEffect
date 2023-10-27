import React, { useEffect, useState } from "react";



const Task2=()=>{
const [count,setCount]=useState(0);


const Increment=()=>{
   setCount(count+1)
}

useEffect(()=>{
   document.title=`Counter ${count}`;
})

   return(
      <>

      <button onClick={Increment}>Increment</button>
      <div>Counter : {count}</div>
      
      </>
   )
}


export default Task2;