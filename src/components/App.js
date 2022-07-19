

import React , {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [apClass, setapClass] = useState(false)
  const aptClass = apClass ? "Apt dark" : "App light"

  function darkModeHandler(){
    apClass ? setapClass(false) : setapClass(true) 
  }

 


  return (
    <div className={aptClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkModeHandler}>{apClass === true ? "Dark Mode" : "Light Mode" }</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
