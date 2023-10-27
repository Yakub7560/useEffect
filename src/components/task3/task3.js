import React, { useEffect, useState } from "react";
import './task3.css'



const Task3 = () => {
   const [list, setList] = useState([]);

   useEffect(() => {


      fetch('https://fakestoreapi.com/products?limit=10')
         .then(res => res.json())
         .then(products => setList(products))

   }, [])


   return (
      <>

         <div className="products__list">
            {list.map((item) => (
               <div className="product__item">
                  
                  <div className="item__title">{item.id}.  {item.title}</div>
                  <div className="item__image"><img src={item.image} alt={item.title}/> </div>
                  <div className="item__description">{item.description}</div>
                  
               
               </div>)
            )}

         </div>



      </>
   )
}


export default Task3;