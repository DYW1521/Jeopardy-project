const gameData = [
    {
        category: "Science",
        clues: [
            { question: "What is the chemical symbol for water?", answer: "H2O", value: 100 },
            { question: "What planet is known as the Red Planet?", answer: "Mars", value: 200 },
            { question: "What gas do plants absorb from the atmosphere?", answer: "Carbon Dioxide", value: 300 },
            { question: "What is the powerhouse of the cell?", answer: "Mitochondria", value: 400 },
            { question: "What is the most abundant gas in the Earth's atmosphere?", answer: "Nitrogen", value: 500 }
        ]
    },
    {
        category: "Literature",
        clues: [
            { question: "Who wrote the play 'Romeo and Juliet'?", answer: "William Shakespeare", value: 100 },
            { question: "What is the name of the hobbit played by Elijah Wood in the 'Lord of the Rings' movies?", answer: "Frodo Baggins", value: 200 },
            { question: "Who is the author of '1984'?", answer: "George Orwell", value: 300 },
            { question: "In which novel would you find the character Atticus Finch?", answer: "To Kill a Mockingbird", value: 400 },
            { question: "What is the first book of the Old Testament?", answer: "Genesis", value: 500 }  
        ]
    },
    // Add more categories and clues as needed
    {
        category: "Geography",
        clues: [
            { question: "What is the capital of France?", answer: "Paris", value: 100 },
            { question: "Which river is the longest in the world?", answer: "Nile", value: 200 },
            { question: "What is the largest desert in the world?", answer: "Sahara", value: 300 },
            { question: "Which country is known as the Land of the Rising Sun?", answer: "Japan", value: 400 },
            { question: "What is the smallest country in the world?", answer: "Vatican City", value: 500 }
        ]
    },
    {
        category: "Sports",
        clues: [
            { question: "Which country won the FIFA World Cup in 2018?", answer: "France", value: 100 },
            { question: "In which sport would you perform a slam dunk?", answer: "Basketball", value: 200 },
            { question: "What is the national sport of Japan?", answer: "Sumo Wrestling", value: 300 },
            { question: "Which athlete is known as 'The Greatest'?", answer: "Muhammad Ali", value: 400 },
            { question: "What is the only sport to have been played on the moon?", answer: "Golf", value: 500 }
        ]
    }
];

// Function to render the game board
function renderBoard(data) {
    const boardElement = document.getElementById("jeopardy-board");
    boardElement.innerHTML = ""; // Clear existing board

    data.forEach(categoryData => {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
        categoryDiv.innerHTML = `<h2>${categoryData.category}</h2>`;

        categoryData.clues.forEach(clue => {
            const clueDiv = document.createElement("div");
            clueDiv.classList.add("clue");
            clueDiv.textContent = `$${clue.value}`;
            clueDiv.addEventListener("click", () => showQuestion(clue));
            categoryDiv.appendChild(clueDiv);
        });
        boardElement.appendChild(categoryDiv);
    });
}
function createGameBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Clear existing board

    gameData.forEach((categoryData, categoryIndex) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        categoryDiv.innerHTML = `<h2>${categoryData.category}</h2>`;
        gameBoard.appendChild(categoryDiv);

        categoryData.clues.forEach((clue, clueIndex) => {
            const clueDiv = document.createElement('div');
            clueDiv.classList.add('clue');
            clueDiv.textContent = clue.value;
            clueDiv.dataset.categoryIndex = categoryIndex;
            clueDiv.dataset.clueIndex = clueIndex;
            clueDiv.addEventListener('click', handleClueClick);
            categoryDiv.appendChild(clueDiv);
        });
    });
}
// Function to show a question
function showQuestion(clue) {
    const questionDisplay = document.getElementById("question-display");
    const answerDisplay = document.getElementById("answer-display");
    const revealButton = document.getElementById("reveal-answer-button");

    questionDisplay.textContent = clue.question;
    answerDisplay.textContent = ""; // Clear previous answer
    revealButton.onclick = () => answerDisplay.textContent = clue.answer;
}
// Initialize the game
document.addEventListener("DOMContentLoaded", () => {
    renderBoard(gameData);
    function handleClueClick(event) {
    const categoryIndex = event.target.dataset.categoryIndex;
    const clueIndex = event.target.dataset.clueIndex;
    const clue = gameData[categoryIndex].clues[clueIndex];
    // Display the question (e.g., in a modal or dedicated div)
    document.getElementById('question-display').textContent = clue.question;
    // Mark the clue as answered (e.g., change its appearance, disable clicks)
    event.target.classList.add('answered');
    event.target.removeEventListener('click', handleClueClick);
}
});

