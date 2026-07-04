const startButton =
document.querySelector(".start-button");

const deckOverlay =
document.querySelector(".deck-overlay");

const flashcardOverlay =
document.querySelector(".flashcard-overlay");

const startLearning =
document.querySelector(".start-learning");

startButton.addEventListener("click", function(){

    deckOverlay.style.display = "flex";
});

const closeOverlay =
document.querySelector(".close-overlay");