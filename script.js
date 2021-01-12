function compPlay() {
    random = String(Math.floor(Math.random() * 3))
    if  (random === "0") {
        return "rock"
    } else if (random === "1") {
        return "paper"
    } else {
        return "scissors"
    }
}

function click(play) {
    play.classList.remove("pop");
    play.classList.add("click");
    setTimeout(function(){
        play.classList.add("pop")
        play.classList.remove("click")
    }, 120)
}

rock = document.querySelector("#rock");
paper = document.querySelector("#paper");
scissors = document.querySelector("#scissors");
player_score_display = document.querySelector(".player-score-num");
computer_score_display = document.querySelector(".computer-score-num");
outcome = document.querySelector("#outcome-text");
player_move = document.querySelector("#player-move");
computer_move = document.querySelector("#computer-move");

player_score = 0;
computer_score = 0;

player_score_display.textContent = "0";
computer_score_display.textContent = "0";

rock.addEventListener("mousedown", function(){
    comp_play = compPlay()
    player_move.textContent = "ROCK";
    click(rock)
    if (comp_play === "rock") {
        outcome.textContent = "TIE. You Both Played Rock";
        computer_move.textContent = "ROCK";
    } else if (comp_play === "paper") {
        outcome.textContent = "You Lose This Round";
        computer_move.textContent = "PAPER";
        computer_score += 1;
        computer_score_display.textContent = String(computer_score);
    } else {
        outcome.textContent = "You Win This Round";
        computer_move.textContent = "SCISSORS";
        player_score += 1;
        player_score_display.textContent = String(player_score);
    }

    if (player_score >= 10) {
        outcome.textContent = "VICTORY";
        player_score = 0;
        player_score_display.textContent = String(player_score)
    } else if (computer_score >= 10) {
        outcome.textContent = "DEFEAT";
        computer_score = 0;
        computer_score_display.textContent = String(computer_score)
    }
});

paper.addEventListener("mousedown", function(){
    comp_play = compPlay()
    player_move.textContent = "PAPER";
    click(paper)
    if (comp_play === "rock") {
        outcome.textContent = "You Win This Round";
        computer_move.textContent = "ROCK";
        player_score += 1;
        player_score_display.textContent = String(player_score);
    } else if (comp_play === "paper") {
        outcome.textContent = "Tie. You Both Played Paper";
        computer_move.textContent = "PAPER";
    } else {
        outcome.textContent = "You Lose This Round";
        computer_move.textContent = "SCISSORS";
        computer_score += 1;
        computer_score_display.textContent = String(computer_score);
    }

    if (player_score >= 10) {
        outcome.textContent = "VICTORY";
        player_score = 0;
        player_score_display.textContent = String(player_score)
    } else if (computer_score >= 10) {
        outcome.textContent = "DEFEAT";
        computer_score = 0;
        computer_score_display.textContent = String(computer_score)
    }
});


