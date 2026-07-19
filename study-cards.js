const startButton =
document.querySelector(".start-button");

const deckOverlay =
document.querySelector(".deck-overlay");

const flashcardOverlay =
document.querySelector(".flashcard-overlay");

const startLearning =
document.querySelector(".start-learning");

const flashcardInner = document.querySelector(".flashcard-inner");

startButton.addEventListener("click", function(){

    deckOverlay.style.display = "flex";
});

const closeButton =
document.querySelector(".close-button");

closeButton.addEventListener("click", function(){

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

const frontImage = document.querySelector(".card-front img");

const chineseWord = document.querySelector(".card-front h2");

const pinyinWord = document.querySelector(".card-back h2");

const englishWord = document.querySelector(".card-back p");

const leftArrow = document.querySelector(".arrow-left");

leftArrow.addEventListener("click",()=>{

    currentCard--;

    if(currentCard<0){

        currentCard=cards.length-1;
    }

    showCard(currentCard);

    flashcard.classList.remove("flipped");

    updateProgress();
});

const rightArrow = document.querySelector(".arrow-right");

rightArrow.addEventListener("click",()=>{

    currentCard++;

    if(currentCard>=cards.length){

        currentCard=0;
    }

    showCard(currentCard);

    flashcard.classList.remove("flipped");

    updateProgress();
});

const progressFill = document.querySelector(".progress-fill");

const progressText = document.querySelector(".progress-text");

const exitButton = document.querySelector(".exit-button");

exitButton.addEventListener("click", function(){

    flashcardOverlay.style.display = "none";
});

const cards = [

    {
        chinese:"老虎",

        pinyin:"lǎohǔ",

        english:"Tiger",

        image:"Tiger.jpg",

        type:"Noun",

        hsk:"HSK 1"
    },

    {
        chinese:"喜鹊",

        pinyin:"xǐquè",

        english:"Magpie",

        image:"Magpie.jpg",

        type:"Noun",

        hsk:"HSK 5"
    },

    {
        chinese:"拉面",

        pinyin:"lāmiàn",

        english:"Ramen",

        image:"Ramen.jpg",

        type:"Noun",

        hsk:"HSK 1"
    },

    {
        chinese:"麦当劳",

        pinyin:"Màidāngláo",

        english:"McDonald's",

        image:"McDonalds.jpg",

        type:"Noun",

        hsk:"HSK 2"
    },

    {
        chinese:"战斗",

        pinyin:"zhàndòu",

        english:"To Fight",

        image:"To_Fight.jpg",

        type:"Verb",

        hsk:"HSK 4"

    },

    {
        chinese:"爱",

        pinyin:"ài",

        english:"To Love",

        image:"To_Love.jpg",

        type:"Verb",

        hsk:"HSK 2"
    },

    {
        chinese:"写",

        pinyin:"xiě",

        english:"To Write",

        image:"To_Write.jpg",

        type:"Verb",

        hsk:"HSK 2"
    }
];

let currentCard =
Math.floor(Math.random()*cards.length);

function showCard(index){

}

function nextCard(){

}

currentCard++;

showCard(currentCard);

flashcard.classList.remove("flipped");

function updateProgress(){

}

function showCard(index){

    frontImage.src = cards[index].image;

    chineseWord.textContent = cards[index].chinese;

    pinyinWord.textContent = cards[index].pinyin;

    englishWord.textContent = cards[index].english;
}

function updateProgress(){

    const percent = ((currentCard + 1) / cards.length) * 100;

    progressFill.style.width = percent + "%";

    progressText.textContent = `${currentCard + 1} / ${cards.length}`;
}