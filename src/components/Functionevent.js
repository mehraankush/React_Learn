import React from 'react';

const FunctionEvent = () =>{

   function clickHandler(){
    console.log("button click");
   }

    return(
     <div>
        <button onClick={clickHandler}>
            click me 
        </button>
     </div>
    )
}

export default FunctionEvent;