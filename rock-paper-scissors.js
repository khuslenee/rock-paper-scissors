document.addEventListener("DOMContentLoaded", () => {
  const choices = ["rock", "paper", "scissors"];
  const resultText = document.getElementById("result-text");
  const winCountElem = document.getElementById("win-count");
  const lossCountElem = document.getElementById("loss-count");
  const tieCountElem = document.getElementById("tie-count");

  let winCount = 0;
  let lossCount = 0;
  let tieCount = 0;

  const getAIChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const determineWinner = (userChoice, aiChoice) => {
    if (userChoice === aiChoice) {
      tieCount++;
      return "It's a tie!";
    }
    if (
      (userChoice === "rock" && aiChoice === "scissors") ||
      (userChoice === "paper" && aiChoice === "rock") ||
      (userChoice === "scissors" && aiChoice === "paper")
    ) {
      winCount++;
      return "You win!";
    }
    lossCount++;
    return "AI wins!";
  };

  document.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", () => {
      const userChoice = button.getAttribute("data-choice");
      const aiChoice = getAIChoice();
      const result = determineWinner(userChoice, aiChoice);
      resultText.textContent = `AI chose: ${aiChoice}. ${result}`;

      winCountElem.textContent = winCount;
      lossCountElem.textContent = lossCount;
      tieCountElem.textContent = tieCount;
    });
  });
});
