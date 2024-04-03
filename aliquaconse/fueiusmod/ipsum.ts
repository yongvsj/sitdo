// Define a type that can be either a number or a string
type NumberOrString = number | string;

// Initialize a variable with the type NumberOrString
let myStr2: NumberOrString = 'Riyad';

// Function to update the value of myStr2 with proper type checking
function updateMyStr2(newValue: NumberOrString) {
  // Ensure the new value is either a number or a string
  if (typeof newValue === 'number' || typeof newValue === 'string') {
    myStr2 = newValue;
  } else {
    console.error('Value must be a number or a string');
  }
}

// Example usage of the updateMyStr2 function
updateMyStr2(10); // myStr2 is now a number
updateMyStr2('Hello'); // myStr2 is now a string
