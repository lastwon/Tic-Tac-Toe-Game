const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: "",
        symbol: "X"
    },
    {
        name: "",
        symbol: "O"
    }
];


const playerOneEditButton = document.getElementById("player-1-editButton"); // button to edit name
const playerTwoEditButton = document.getElementById("player-2-editButton"); // button to edit name
const startNewGameElement = document.getElementById("start-new-game");

const cancelButtonOnOverlay = document.getElementById("cancel"); // access to cancel button on overlay
const submitButtonOnOverlay = document.getElementById("confirm");   // access to submit button on overlay
const gameFieldElements = document.querySelectorAll("#game-board li");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");
const winnerNameElement = document.getElementById("winner-name");
const h2Element = document.getElementById("h2par");
const gameBoard = document.getElementById("game-board");

const backdrop = document.getElementById("backdrop");   // access to background color element
const overlay = document.getElementById("overlay");    // access to change name overlay element
const formElement = document.querySelector("form");
const errorsOutput = document.getElementById("config-error");

const playerOneName = document.getElementById("playerName1");
const playerTwoName = document.getElementById("playerName2");

playerOneEditButton.addEventListener("click", editPlayerName);
playerTwoEditButton.addEventListener("click", editPlayerName);

cancelButtonOnOverlay.addEventListener("click", cancelButtonClicked);
backdrop.addEventListener("click", cancelButtonClicked);

formElement.addEventListener("submit", saveEnteredName); // saving entered player name

startNewGameElement.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener("click", selectGameField);
}