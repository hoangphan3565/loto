var calledNumbers = []; // Array to store called numbers

// Initialize number matrix
var numberMatrix = [];
for (var i = 1; i <= 10; i++) {
  var column = [];
  for (var j = i; j <= 90; j += 10) {
    column.push(j);
  }
  numberMatrix.push(column);
}

// Function to call a number
function callNumber() {
  if (calledNumbers.length === 90) {
    alert("All numbers have been called!");
    return;
  }

  var randomNumber = generateRandomNumber();
  calledNumbers.push(randomNumber);
  updateNumberDisplay(randomNumber);
  updateCalledNumbersDisplay(randomNumber);
}

// Function to reset the game
function reset() {
  calledNumbers = [];
  updateCalledNumbersDisplay();
  updateNumberDisplay('-'); // Change current number to 0
}

// Function to generate a random number
function generateRandomNumber() {
  var randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 90) + 1;
  } while (calledNumbers.includes(randomNumber));
  return randomNumber;
}

// Function to update the number display
function updateNumberDisplay(number) {
  document.getElementById('numberDisplay').innerText = number;
}

// Function to update the called numbers display and matrix
function updateCalledNumbersDisplay(number) {
  var numberMatrixElement = document.getElementById('numberMatrix');
  numberMatrixElement.innerHTML = '';
  
  numberMatrix.forEach(function(column) {
    var columnElement = document.createElement('div');
    columnElement.classList.add('number-column');
    column.forEach(function(num) {
      var numberCell = document.createElement('div');
      numberCell.classList.add('number-cell');
      numberCell.textContent = num;
      if (calledNumbers.includes(num)) {
        numberCell.classList.add('called');
      }
      columnElement.appendChild(numberCell);
    });
    numberMatrixElement.appendChild(columnElement);
  });
}

// Draw the matrix when initializing the app
updateCalledNumbersDisplay();
