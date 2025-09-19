let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    tie: 0,
  }
}
show_choice();
function humanChoice(choice) {
  let computerMove = computerChoice();
  let result;
  if (choice === "Paper") {
    if (computerMove === "Paper") {
      score.tie += 1;
      result = "Tie";
    }
    else if (computerMove === "Scissor") {
      score.losses += 1;
      result = "Lose";
    }
    else if (computerMove === "Rock") {
      score.wins += 1;
      result = "Wins";

    }
  }
  else if (choice === "Rock") {
    if (computerMove === "Paper") {
      score.losses += 1;
      result = "Lose";
    }
    else if (computerMove === "Scissor") {
      score.wins += 1;
      result = "Wins";
    }
    else if (computerMove === "Rock") {
      score.tie += 1;
      result = "Tie";
    }
  }
  else if (choice === "Scissor") {
    if (computerMove === "Paper") {
      score.wins += 1;
      result = "Wins";

    }
    else if (computerMove === "Scissor") {
      score.tie += 1;
      result = "Tie";
    }
    else if (computerMove === "Rock") {
      score.losses += 1;
      result = "Lose";
    }
  }
  localStorage.setItem('score', JSON.stringify(score));
  show_winner();
  show_choice();
  function show_winner() {
    if (result === "Wins") {
      document.querySelector('.show-winner').innerHTML = `You won`;
    }
    else if (result === "Lose") {
      document.querySelector('.show-winner').innerHTML = `You lose`;
    }
    else {
      document.querySelector('.show-winner').innerHTML = `Tie`;
    }
  }
  function show_choice() {
    document.querySelector('.choice-text').innerHTML = `You chose: <img class="img-choice" src="asset/${choice.toLowerCase()}.png"> - Computer chose: <img class="img-choice" src="asset/${computerMove.toLowerCase()}.png" <br> Wins: ${score.wins} - Losses: ${score.losses} - Tie: ${score.tie}`;
  }
  function computerChoice() {
    const randomnumber = Math.random();
    let computerMove = '';
    if (randomnumber >= 0 && randomnumber < 1 / 3) {
      computerMove = "Rock";
    }
    else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
      computerMove = "Paper";
    }
    else if (randomnumber < 1 && randomnumber >= 2 / 3) {
      computerMove = "Scissor";
    }
    return computerMove;
  }
}
function show_choice() {
  document.querySelector('.show-score').innerHTML = `Wins: ${score.wins} - Losses: ${score.losses} - Tie: ${score.tie}`;
}
function reset_score() {
  score.wins = 0;
  score.losses = 0;
  score.tie = 0;
  localStorage.removeItem('score');
  document.querySelector('.show-winner').innerHTML = ``;
  show_choice();
}
