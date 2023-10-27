import React, { useEffect, useState } from "react";


const Task1 = () => {

   const [name, setName] = useState("");

   useEffect(() => {
   console.log("Name:", name);
   }, [name]);

   return (
      <div>
         <div>Изменения выводятся в консоли</div>
         <input
            type="text"
            placeholder="Введите имя"
            onChange={(event) => setName(event.target.value)}
         />
         <p>Имя: {name}</p>
      </div>
   );
}
export default Task1;
