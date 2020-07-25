import React, { useState } from "react";
import Button from "../Button/Button";

const Outlook = () => {
    const [currentValue,setCurrentValue]=useState([]);
    const [currentOperator,setCurrentOperator]=useState();


  const clearData = () => {
    document.getElementById("inp").value = "";
    setCurrentValue([]);
    setCurrentOperator();
    
  };

  const onClickdisplay = (val) => {
      
      const value3 = parseInt(document.getElementById('inp').value);
      setCurrentValue([...currentValue,value3]);
      setCurrentOperator(val);
      document.getElementById("inp").value = "";


     //const a = document.getElementById("inp").value;
    //document.getElementById("inp").value = a + val;
  };



  const getResult = () => {
    const value2 = parseInt(document.getElementById('inp').value);
    
    const [value1]=currentValue;
      if(currentOperator==='+'){
           
           const result=value1+value2;
           document.getElementById('inp').value=`Result:-${result}`;
      }

      else if(currentOperator==='-'){
        const result=value1-value2;
        document.getElementById('inp').value=`Result:-${result}`;
   }

   else if(currentOperator==='*'){
    const result=value1*value2;
    document.getElementById('inp').value=`Result:-${result}`;
}

    else if(currentOperator==='/'){
        const result=value1/value2;
        document.getElementById('inp').value=`Result:-${result}`;
}

  }

  return (
    <div>
      <input
        id="inp"
        
        
      />
      <Button
        id="add"
        value="+"
        onClick={() => {
          onClickdisplay("+");
        }}
      />
      <Button
        id="sub"
        value="-"
        onClick={() => {
          onClickdisplay("-");
        }}
      />
      <Button
        id="mul"
        value="*"
        onClick={() => {
          onClickdisplay("*");
        }}
      />
      <Button
        id="divide"
        value="/"
        onClick={() => {
          onClickdisplay("/");
        }}
      />

      <Button id="result" value="Result" onClick={getResult}></Button>
      <Button id="clear" value="Clear" onClick={clearData}></Button>
    </div>
  );
};
export default Outlook;
