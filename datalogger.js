var numberValues = []; //declared a global variable ARRAY
//numberValues = [1, 5, 9, 2];

function addANewNumber()
{
  //get text input from the DOM and store it in a variable
  //check if that variable is a number
  //if it is, add it to the  back of the array
  //if it is not, give it a warning or error
  var newNum = document.getElementById("dataInput").value;
  if( isNaN(newNum) == false )
  {
    newNum = Number(newNum);
    numberValues.push(newNum);
  }
}

function updateTotal()
{
  //go through each element in an array and add it to a running total
  //update the screen to show what that total is
  var total = 0;
  for(var i = 0; i < numberValues.length; i++)
  {
    total = total + numberValues[i];
  }
  document.getElementById("total").innnerHTML = total;
}

function updateAverage()
{
  //go through each element in an array and add it to a running total
  //then divide by the number of elements in the array
  //then update the screen to show the average
}
