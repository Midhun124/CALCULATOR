function buttonclick(val)
{
  document.getElementById("screen").value+=val;
}
function buttonclear() {
  document.getElementById("screen").value="";
}
function backSpace() {
  // Get the current value of the calculator screen
  var currentValue = document.getElementById("screen").value;
  
  // Remove the last character from the current value
  var newValue = currentValue.slice(0, -1);
  
  // Update the calculator screen with the new value
  document.getElementById("screen").value = newValue;
}

function equalButton() {
  var text=document.getElementById("screen").value
  var result=eval(text)
  document.getElementById("screen").value=result;
}
