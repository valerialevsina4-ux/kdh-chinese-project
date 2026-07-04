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

closeOverlay.addEventListener("click", function(){

    deckOverlay.style.display = "none";
});

startLearning.addEventListener("click", function(){

    deckOverlay.style.display = "none";

    flashcardOverlay.style.display = "flex";
});

const flashcard =
document.querySelector(".flashcard");

flashcard.addEventListener("click", function(){

    flashcard.classList.toggle("flipped");
});

const cards = [

    {
        chinese:"老虎",

        pinyin:"lǎohǔ",

        english:"Tiger",

        image:"Tiger.jpg"
    },
]

let currentCard =
Math.floor(Math.random()*cards.length);

function showCard(index){

}

function nextCard(){

}

currentCard++;

showCard(currentCard);

function updateProgress(){
    
}