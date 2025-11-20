import React from "react";
import { useState } from "react";

const Statetutorial = () => {
  const [count ,setCount] =useState (1);

  const Increment = () => {
    setCount(count + 1);
    console.log("why you clicking me this many times?", count);
  };
   
  const Reset =() =>{
    setCount (0);
    console.log("resetting the count", count);
  }
  return (
    <div>
      <h1>UseState Tutorial Component</h1>

      <button onClick={Increment}>
        Click Me
      </button>
      <button onClick={Reset}>reset</button>
      <h1>count : {count} </h1>
    </div>
  );
};

export default Statetutorial;
