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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const player_score_display = document.querySelector(".player-score-num");
const computer_score_display = document.querySelector(".computer-score-num");
const outcome = document.querySelector("#outcome-text");
const player_move = document.querySelector("#player-move");
const computer_move = document.querySelector("#computer-move");

let player_score = 0;
let computer_score = 0;

player_score_display.textContent = "0";
computer_score_display.textContent = "0";

rock.addEventListener("mousedown", function(){
    let comp_play = compPlay()
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
        player_score_display.textContent = String(player_score);
        computer_score = 0;
        computer_score_display.textContent = String(computer_score);
    } else if (computer_score >= 10) {
        outcome.textContent = "DEFEAT";
        player_score = 0;
        player_score_display.textContent = String(player_score);
        computer_score = 0;
        computer_score_display.textContent = String(computer_score);
    }
});

paper.addEventListener("mousedown", function(){
    let comp_play = compPlay()
    player_move.textContent = "PAPER";
    click(paper)
    if (comp_play === "rock") {
        outcome.textContent = "You Win This Round";
        computer_move.textContent = "ROCK";
        player_score += 1;
        player_score_display.textContent = String(player_score);
    } else if (comp_play === "paper") {
        outcome.textContent = "TIE. You Both Played Paper";
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
        computer_score = 0;
        computer_score_display.textContent = String(computer_score)
    } else if (computer_score >= 10) {
        outcome.textContent = "DEFEAT";
        player_score = 0;
        player_score_display.textContent = String(player_score)
        computer_score = 0;
        computer_score_display.textContent = String(computer_score)
    }
});

scissors.addEventListener("mousedown", function(){
    let comp_play = compPlay()
    player_move.textContent = "SCISSORS";
    click(scissors)
    if (comp_play === "rock") {
        outcome.textContent = "You Lose This Round";
        computer_move.textContent = "ROCK";
        computer_score += 1;
        computer_score_display.textContent = String(computer_score);
    } else if (comp_play === "paper") {
        outcome.textContent = "You Win This Round";
        computer_move.textContent = "PAPER";
        player_score += 1;
        player_score_display.textContent = String(player_score);
    } else {
        outcome.textContent = "TIE. You Both Played Scissors";
        computer_move.textContent = "SCISSORS";
        
    }

    if (player_score >= 10) {
        outcome.textContent = "VICTORY";
        player_score = 0;
        player_score_display.textContent = String(player_score)
        computer_score = 0;
        computer_score_display.textContent = String(computer_score)
    } else if (computer_score >= 10) {
        outcome.textContent = "DEFEAT";
        player_score = 0;
        player_score_display.textContent = String(player_score)
        computer_score = 0;
        computer_score_display.textContent = String(computer_score)
        
    }
});


