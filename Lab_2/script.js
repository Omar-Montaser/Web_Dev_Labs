let display=document.getElementById("display");
let current="0";

function press(key) {
  if (current==="0"&&key!==".") current=key;
  else current+=key;
  display.textContent=current;
}

function clearDisplay() {
  current="0";
  display.textContent=current;
}

function toggleSign() {
  if (current.startsWith("-"))
    current=current.slice(1);
  else current="-"+current;
  display.textContent=current;
}

function percent() {
  current=(parseFloat(current)/100).toString();
  display.textContent=current;
}

function calculate() {
  try {
    current=eval(current).toString();
    display.textContent=current;
  }catch {
    display.textContent="Error";
    current="0";
  }
}
