// JavaScript code for Tic Tac Toe game

// Initial player
let Player = document.getElementById("player");
let currentPlayer = 'X';

// Event listener for button clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        // Check if the button is empty
        if (button.textContent === '_') {
            // Set the current player's symbol
            button.textContent = currentPlayer;

            // Check for a winner or a tie
            if (checkWinner() === currentPlayer) {
                Player.innerHTML="Player "+currentPlayer+" wins";
                // alert(`Player ${currentPlayer} wins!`);
            } else if (isBoardFull()) {
                Player.innerHTML="It's a tie!";
                // alert("It's a tie!");
            } else {
                // Switch to the other player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                Player.innerHTML = "Player "+currentPlayer;
            }
        }
    });
});

// Function to check for a winner
function checkWinner() {
    const cells = document.querySelectorAll('button');

    // Check rows, columns, and diagonals
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent !== '_' &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent) {
            return cells[a].textContent;
        }
    }

    return null; // No winner yet
}

// Function to check if the board is full (tie)
function isBoardFull() {
    const cells = document.querySelectorAll('button');
    return Array.from(cells).every(cell => cell.textContent !== '_');
}

// Function to reset the game
function resetGame() {
    document.querySelectorAll('button').forEach(button => {
        button.textContent = '_';
    });
    currentPlayer = 'X';
    Player.innerHTML= "Player X";
}
