// Span elements
const humanOutput = document.querySelector("#human");
const computerOutput = document.querySelector("#computer");
const resultOutput = document.querySelector("#result");

// Buttons
const steenBtn = document.querySelector("#steen");
const papierBtn = document.querySelector("#papier");
const schaarBtn = document.querySelector("#schaar");

// Variabelen
let humanChoice = "";
let computerChoice = "";

// Starttekst
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";
computerOutput.innerHTML = "";
resultOutput.innerHTML = "";

// Event listeners
steenBtn.addEventListener("click", function () {
    humanChoice = "steen";
    humanOutput.innerHTML = humanChoice;
    playRound();
});

papierBtn.addEventListener("click", function () {
    humanChoice = "papier";
    humanOutput.innerHTML = humanChoice;
    playRound();
});

schaarBtn.addEventListener("click", function () {
    humanChoice = "schaar";
    humanOutput.innerHTML = humanChoice;
    playRound();
});

// Random computer keuze + uitkomst
function playRound() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) computerChoice = "steen";
    if (randomNumber === 2) computerChoice = "papier";
    if (randomNumber === 3) computerChoice = "schaar";

    computerOutput.innerHTML = computerChoice;

    if (humanChoice === computerChoice) {
        resultOutput.innerHTML = "Gelijkspel!";
    } else if (
        (humanChoice === "steen" && computerChoice === "schaar") ||
        (humanChoice === "papier" && computerChoice === "steen") ||
        (humanChoice === "schaar" && computerChoice === "papier")
    ) {
        resultOutput.innerHTML = "Je wint!";
    } else {
        resultOutput.innerHTML = "Computer wint!";
    }
}