import React, { useState } from "react";
import Task0 from "./task0/task0";
import Task1 from "./task1/task1";
import Task2 from "./task2/task2";
import Task3 from "./task3/task3";
import Task4 from "./task4/task4";
import Task5 from "./task5/task5";
import Task6 from "./task6/task6";

import './lscom.css';

const App = () => {

   const [selectedComponent, setSelectedComponent] = useState(null);

   const components = [
      { name: 'Task 0', component: <Task0 /> },
      { name: 'Task 1', component: <Task1 /> },
      { name: 'Task 2', component: <Task2 /> },
      { name: 'Task 3', component: <Task3 /> },
      { name: 'Task 4', component: <Task4 /> },
      { name: 'Task 5', component: <Task5 /> },
      { name: 'Task 6', component: <Task6 /> },
   ];

   const handleComponentClick = (componentName) => {
      const selected = components.find((comp) => comp.name === componentName);
      setSelectedComponent(selected.component);
   };

   return (
      <div>
         <div className="lsofcom">
            {components.map((comp) => (
               <button key={comp.name} onClick={() => handleComponentClick(comp.name)}>
                  {comp.name}
               </button>
            ))}
         </div>
         <div>
            {selectedComponent ? (
               selectedComponent
            ) : (
               <p>Выберите компонент из списка</p>
            )}
         </div>
      </div>
   );
}
export default App;
