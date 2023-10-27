import React, { useEffect, useState } from "react";



const Task4 = () => {

   const [selectedOption, setSelectedOption] = useState('white');

   useEffect(() => {
      document.body.style.backgroundColor = selectedOption;
   }, [selectedOption])

   
   const handleChange = (event) => {
      setSelectedOption(event.target.value);

   };

   return (
      <select onChange={handleChange}>
         <option value="white">White</option>
         <option value="red">Red</option>
         <option value="green">Green</option>
         <option value="blue">Blue</option>
      </select>
   );
}

export default Task4;