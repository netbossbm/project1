function calc() {

  var num1 = parseFloat(document.getElementById("number1").value);
  var num2 = parseFloat(document.getElementById("number2").value);
  var operator = document.getElementById("operator").value;
  var outputField = document.getElementById("output");

  // Check if any of the input fields are empty
  if (isNaN(num1) || isNaN(num2) || operator.trim() === "") {
    outputField.value = "Error: Please enter numbers and select an operator.";
    return;
  }

   
  var result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Cannot divide by zero";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "Invalid operator";
  }

  // Result
  outputField.value = result;
}
