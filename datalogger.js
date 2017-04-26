var numberValues = []; //declared a global variable ARRAY
//numberValues = [1, 5, 9, 2];

function addANewNumber()
{
  //get text input from the DOM and store it in a variable
  //check if that variable is a number
  //if it is, add it to the  back of the array
  //if it is not, give it a warning or error
  var newNum = document.getElementById("dataInput").value;
  if(isNaN(newNum) == false)
  {
    newNum = Number(newNum);
    numberValues.push(newNum);
    var newTotal = calculateTotal();
    document.getElementById("total").innnerHTML = newTotal;
    document.getElementById("average").innnerHTML = newTotal / numberValues.length;
  }
}

function calculateTotal()
{
  //go through each element in an array and add it to a running total
  //update the screen to show what that total is
  var runningTotal = 0;
  for(var i = 0; i < numberValues.length; i++)
  {
    runningTotal = runningTotal + numberValues[i];
  }
  return runningTotal;
}

function updateAverage()
{
  var average = 0;
  for(var i = 0; i < numberValues.length; i++)
  {
    average = average + numberValues[i];
  }
  average = average/numberValues.length;
  document.getElementById("average").innerHTML = average;
}
