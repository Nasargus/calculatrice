// Ensure the DOM is fully loaded before executing the JavaScript
document.addEventListener('DOMContentLoaded', function () {
    
    
    //create a title that already exist on html (display h1 only)

    



    // Create the display input field and set it as readonly
    
    const display = document.createElement('input');
    display.type = 'text';
    display.id = 'display';
    display.readOnly = true;
    document.body.appendChild(display);
    console.log();

// create a title
   

// Create the calculator container
    const calculator = document.createElement('div');
    calculator.id = 'calculator';
//    calculator.style.backgroundColor = "#b80000", 
//    calculator.style.width = "600px", 
//    calculator.style.height = "700px",
    document.body.appendChild(calculator);

    // Define a function to create buttons and append them to the calculator
    function createAndAppendButton(text, clickHandler) {
        // Create a button element
        const button = document.createElement('button');
        // Set the button's text
        button.textContent = text;
        // Add a click event handler to the button
        button.addEventListener('click', clickHandler);
        
        return button;
    }

    // Create buttons for each row
    const buttonLabels = [
        
        ['7', '8', '9', '+'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '*'],
        ['0', '.', '=', '/'],
        ['C', 'ON/OFF'],
        
    ];

    for (const row of buttonLabels) {
        // Create a container for each row of buttons
        const rowContainer = document.createElement('div');
        for (const label of row) {
            if (label === 'C' || label === 'ON/OFF') {
                // Create and append a button with the "C" or "ON/OFF" label
                rowContainer.appendChild(createAndAppendButton(label, clearDisplay));
            } else if (label === '=') {
                // Create and append a button with the "=" label
                rowContainer.appendChild(createAndAppendButton(label, calculateResult));
            } else {
                // Create and append a button with a digit or operator label
                rowContainer.appendChild(createAndAppendButton(label, () => appendToDisplay(label)));
            }
        }
        // Append the row container to the calculator container
        calculator.appendChild(rowContainer);
    }

    // Define functions for calculator buttons
    function appendToDisplay(value) {
        const display = document.getElementById('display');
        display.value += value;
    }

    function calculateResult() {
        const display = document.getElementById('display');
        const expression = display.value;
        try {
            const result = eval(expression);
            display.value = result;
        } catch (error) {
            display.value = 'Erreur';
        }
    }

    function clearDisplay() {
        const display = document.getElementById('display');
        display.value = '';
    }
});
