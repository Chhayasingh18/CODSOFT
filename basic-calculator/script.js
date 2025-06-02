let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let currentInput = '';
let resultShown = false;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');

    if (btn.id === 'clear') {
      currentInput = '';
      display.innerText = '0';
    } else if (btn.id === 'equals') {
      try {
        // Evaluate using eval (for simple use case)
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result.toString();
        resultShown = true;
      } catch (error) {
        display.innerText = "Error";
        currentInput = '';
      }
    } else {
      if (resultShown && /[0-9.]/.test(value)) {
        currentInput = '';
        resultShown = false;
      }

      currentInput += value;
      display.innerText = currentInput;
    }
  });
});
