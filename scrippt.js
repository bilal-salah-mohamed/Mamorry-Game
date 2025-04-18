let cards = ['A','B' , 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T','A','B' , 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T'];
let box = document.querySelector(".game");
let moves = document.querySelector(".moves");
let Timer = document.querySelector(".Timer");
let moveCount = 0;
let timePassed = 0;
let interval = 1000;
let timeInterval;

shuffle(cards);

function shuffle(array) {
    let ShuffledArray = [];
    let usedIndexes = [];
    let i = 0;

    while (i < array.length) {
        let randomNumber = Math.floor(Math.random() * array.length);
        if (!usedIndexes.includes(randomNumber)) {
            ShuffledArray.push(array[randomNumber]);
            usedIndexes.push(randomNumber);
            i++;
        }
    }

    for (let i = 0; i < ShuffledArray.length; i++) {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<div class="front"></div><div class="back">${ShuffledArray[i]}</div>`;
        card.dataset.letter = ShuffledArray[i];
        box.appendChild(card);
    }

    return ShuffledArray;
}
let firstCard = null;
let secondCard = null;
let lockBoard = false;

const allCards = document.querySelectorAll(".card");

allCards.forEach(card => {
    card.addEventListener("click", function () {

        if (!timeInterval) {
            timeInterval = setInterval(() => {
                timePassed++;
                Timer.innerHTML = `Timer: ${timePassed}s`;
            }, interval);
        }

        if (lockBoard || card.classList.contains("flipped") || card === firstCard) return;

        card.classList.add("flipped");

        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            lockBoard = true;
            moveCount++;
            moves.innerHTML = `Moves: ${moveCount}`;

            if (firstCard.dataset.letter === secondCard.dataset.letter) {
                firstCard = null;
                secondCard = null;
                lockBoard = false;
            } else {
                setTimeout(() => {
                    firstCard.classList.remove("flipped");
                    secondCard.classList.remove("flipped");
                    firstCard = null;
                    secondCard = null;
                    lockBoard = false;
                }, 800);
            }
        }
    });
});

let button = document.getElementById("button");
button.addEventListener("click", function () {
    location.reload();
});












 cards = ['A','B' , 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T','A','B' , 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T'];

 let crd = Array.from(document.querySelectorAll(".card"));

 let allFliped = crd.filter((card) => card.classList.contains("flipped"));
 
 if (allFliped.length === 2) {
     alert("You win!");
 }
 console.log (allFliped);

