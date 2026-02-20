debugger
let buttons=document.querySelectorAll(".control");
let display=document.getElementById("show");;
let currentValue="";
let firstNumber="";
let operator="";

buttons.forEach((button) =>{
  button.addEventListener("click", ()=>{
  let value = button.innerText;
  if(!isNaN(value)|| value=="."){
   currentValue += value;
    display.innerText=firstNumber+operator+currentValue;
  }
  else if(value=="+"|| value=="-"|| value=="*"||value=="/"){
  if(currentValue=="")
    return;
  firstNumber=currentValue;
  operator = value;
  currentValue="";
  //display.innerText=currentValue;
  display.innerText=firstNumber+operator+currentValue;

  }
  else if(value =="="|| value=="."){
    if(currentValue==""|| firstNumber=="")
      return ;
    let result;
    if(operator =="+"){
      result= Number(firstNumber) + Number (currentValue);
    }
      if(operator=="-"){
        result= Number(firstNumber) - Number (currentValue);
      }
        if(operator=="*"){
          result= Number(firstNumber) * Number (currentValue);
        }
          if(operator=="/"){
            result= Number(firstNumber) / Number (currentValue);
          }
          display.innerText=result;
          operator="";
          firstNumber="";
          currentValue=result;

  }
  else if(value == "C"){
    operator="";
    currentValue="";
    firstNumber="";
    display.innerText="0";
  }
  });
});

 