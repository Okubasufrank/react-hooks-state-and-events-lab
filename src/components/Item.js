import React, {useState} from "react";

function Item({ name, category }) {
  const [classNamess, setclassNamess] = useState("")

  function cartHandle(){
    setclassNamess("in-cart")
  }

  return (
    <li className= {classNamess} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartHandle} > {classNamess ==="" ? "Add to Cart" : "Remove From Cart"} </button>
    </li>
  );
}

export default Item;
