const btn = document.getElementById("btn");
const randomNumber = Math.floor((Math.random() * 100) + 1);
const output = document.getElementById("output");
const resultsBody = document.getElementById("resultsBody");

let numGuess = 0;

const results = JSON.parse(localStorage.getItem('results')) || [];

function checkGuess() {
    const guess = parseInt(document.getElementById("number").value);
    numGuess++;
  
    if (guess === randomNumber) {
      const row = document.createElement("tr");
      const numberCell = document.createElement("td");
      const countCell = document.createElement("td");
  
      numberCell.textContent = guess;
      countCell.textContent = numGuess;
  
      row.appendChild(numberCell);
      row.appendChild(countCell);
  
      resultsBody.appendChild(row);
    }
  
    if(guess === randomNumber) {
      output.innerHTML = `Congratulations, your step count: ${numGuess}`;
    } else if(guess < randomNumber) {
      output.innerHTML = "Your number is low";
    } else {
      output.innerHTML = "Your number is high";
    }
  
    results.push({ number: guess, count: numGuess });
    localStorage.setItem('results', JSON.stringify(results));
  
    document.getElementById("number").value = "";
  }
  
btn.addEventListener("click", checkGuess);




