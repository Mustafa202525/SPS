// Alle knoppen selecteren
const buttons = document.querySelectorAll(".buttons button");

// UI elementen
const playerText = document.getElementById("player");
const computerText = document.getElementById("computer");
const winnerText = document.getElementById("winner");

// Mogelijke keuzes
const choices = ["steen", "papier", "schaar"];

// Event listener voor elke knop
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        // Toon keuzes
        playerText.textContent = "Jij: " + playerChoice;
        computerText.textContent = "Computer: " + computerChoice;

        // Bepaal winnaar
        const result = determineWinner(playerChoice, computerChoice);
        winnerText.textContent = result;

        // ⭐ SPECIAL: Animatie toevoegen
        winnerText.classList.remove("win", "lose", "draw");

        if (result === "Jij wint!") {
            winnerText.classList.add("win");
        } else if (result === "Computer wint!") {
            winnerText.classList.add("lose");
        } else {
            winnerText.classList.add("draw");
        }

    });
});

// Winnaar functie
function determineWinner(player, computer) {
    if (player === computer) return "Gelijkspel!";

    if (
        (player === "steen" && computer === "schaar") ||
        (player === "papier" && computer === "steen") ||
        (player === "schaar" && computer === "papier")
    ) {
        return "Jij wint!";
    }

    return "Computer wint!";
}
