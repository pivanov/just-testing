// Example of a potential XSS vulnerability
const displayUserInput = (input: string) => {
  const element = document.createElement('div');
  element.innerHTML = input; // Dangerous: directly inserting user input into HTML
  document.body.appendChild(element);
};

// Simulating user input that could be malicious
const userInput = '<img src="x" onerror="alert(\'XSS Attack!\')">';
displayUserInput(userInput);

// This will insert the malicious script into the page, potentially executing it
console.log('Inserted potentially malicious content:', userInput);


const calculate = (a: number, b: number) => {
  if (a == b) {
    return a + b;
  }

  return a * b;
};
