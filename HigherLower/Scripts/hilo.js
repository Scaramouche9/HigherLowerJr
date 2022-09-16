// Prompt user to enter a max number, validate
let valid_input = false;
let max, input;

while (!valid_input) {
  input = window.prompt("Chose a positive number to be the max value:"); // prompt user
  max = Number(input); // ensure entry is a number
  if (!isNaN(max) && max > 0) { // accept entry if it is a number above zero
    valid_input = true;
  }
}

// Round entry to nearest whole number
max = Math.round(max);

// REMOVE LATER
console.log(max);

// Change instructions to use user's entry as max number
let instruct = document.getElementById("instruct");
instruct.innerHTML = `Guess a number between 1 and ${max}...`;

// Generate random number between 1 and user-picked max
let answer = Math.floor(Math.random() * max) + 1;

// REMOVE LATER
console.log(answer);

// Compare the random number with the guess
function compare() {

  // Initialize variable for user's individual guesses
  let guess = Number(document.getElementById("guess").value);

  // Initialize array to log all user's guesses
  let guesses = [];

  function record() {
  
    // Add the guess to the end of the array 
    guesses.push(guess);
  
    // REMOVE LATER
    console.log(guesses);
  }

  // Manipulate the response message based on comparing the guess and the answer
  let message = document.getElementById("message");

  // REMOVE LATER
  console.log(guess);

  if (guess == answer) {
    record(guess);
    message.innerHTML = `You got it! It took you ${guesses.length} tries and your guesses were ${guesses}.`;
  } else if (guess < answer && guess > 0) {
    record(guess);
    message.innerHTML = "No, try a higher number."
  } else if (guess > answer && guess < max) {
    record(guess);
    message.innerHTML = "No, try a lower number."
  } else if (guess < 0 || guess > max) {
    record(guess);
    message.innerHTML = "That number is not in range, try again."
  } else if (guess = isNaN) {
    record(guess);
    message.innerHTML = "That is not a number!"
  }
}
