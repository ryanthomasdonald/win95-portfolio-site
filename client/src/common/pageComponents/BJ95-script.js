let flip = document.querySelector("#flip-button");
let hit = document.querySelector("#hit-button");
let stand = document.querySelector("#stand-button");
let newHand = document.querySelector("#new-hand-button")
let dlHand = document.querySelector("#dealer-hand");
let pyHand = document.querySelector("#player-hand");
let faceDown = document.querySelector("#face-down");
let message = document.querySelector("#message");
let playerScoreNum = document.querySelector("#player-total");
let dealerScoreNum = document.querySelector("#dealer-total");
let pWins = document.querySelector("#p-wins");
let dWins = document.querySelector("#d-wins");

var deck = [{rank: 1, score: 1, suit: "hearts", img: "ace_of_hearts.png"},
            {rank: 2, score: 2, suit: "hearts", img: "2_of_hearts.png"},
            {rank: 3, score: 3, suit: "hearts", img: "3_of_hearts.png"},
            {rank: 4, score: 4, suit: "hearts", img: "4_of_hearts.png"},
            {rank: 5, score: 5, suit: "hearts", img: "5_of_hearts.png"},
            {rank: 6, score: 6, suit: "hearts", img: "6_of_hearts.png"},
            {rank: 7, score: 7, suit: "hearts", img: "7_of_hearts.png"},
            {rank: 8, score: 8, suit: "hearts", img: "8_of_hearts.png"},
            {rank: 9, score: 9, suit: "hearts", img: "9_of_hearts.png"},
            {rank: 10, score: 10, suit: "hearts", img: "10_of_hearts.png"},
            {rank: 11, score: 10, suit: "hearts", img: "jack_of_hearts.png"},
            {rank: 12, score: 10, suit: "hearts", img: "queen_of_hearts.png"},
            {rank: 13, score: 10, suit: "hearts", img: "king_of_hearts.png"},
            {rank: 1, score: 1, suit: "clubs", img: "ace_of_clubs.png"},
            {rank: 2, score: 2, suit: "clubs", img: "2_of_clubs.png"},
            {rank: 3, score: 3, suit: "clubs", img: "3_of_clubs.png"},
            {rank: 4, score: 4, suit: "clubs", img: "4_of_clubs.png"},
            {rank: 5, score: 5, suit: "clubs", img: "5_of_clubs.png"},
            {rank: 6, score: 6, suit: "clubs", img: "6_of_clubs.png"},
            {rank: 7, score: 7, suit: "clubs", img: "7_of_clubs.png"},
            {rank: 8, score: 8, suit: "clubs", img: "8_of_clubs.png"},
            {rank: 9, score: 9, suit: "clubs", img: "9_of_clubs.png"},
            {rank: 10, score: 10, suit: "clubs", img: "10_of_clubs.png"},
            {rank: 11, score: 10, suit: "clubs", img: "jack_of_clubs.png"},
            {rank: 12, score: 10, suit: "clubs", img: "queen_of_clubs.png"},
            {rank: 13, score: 10, suit: "clubs", img: "king_of_clubs.png"},
            {rank: 1, score: 1, suit: "diamonds", img: "ace_of_diamonds.png"},
            {rank: 2, score: 2, suit: "diamonds", img: "2_of_diamonds.png"},
            {rank: 3, score: 3, suit: "diamonds", img: "3_of_diamonds.png"},
            {rank: 4, score: 4, suit: "diamonds", img: "4_of_diamonds.png"},
            {rank: 5, score: 5, suit: "diamonds", img: "5_of_diamonds.png"},
            {rank: 6, score: 6, suit: "diamonds", img: "6_of_diamonds.png"},
            {rank: 7, score: 7, suit: "diamonds", img: "7_of_diamonds.png"},
            {rank: 8, score: 8, suit: "diamonds", img: "8_of_diamonds.png"},
            {rank: 9, score: 9, suit: "diamonds", img: "9_of_diamonds.png"},
            {rank: 10, score: 10, suit: "diamonds", img: "10_of_diamonds.png"},
            {rank: 11, score: 10, suit: "diamonds", img: "jack_of_diamonds.png"},
            {rank: 12, score: 10, suit: "diamonds", img: "queen_of_diamonds.png"},
            {rank: 13, score: 10, suit: "diamonds", img: "king_of_diamonds.png"},
            {rank: 1, score: 1, suit: "spades", img: "ace_of_spades.png"},
            {rank: 2, score: 2, suit: "spades", img: "2_of_spades.png"},
            {rank: 3, score: 3, suit: "spades", img: "3_of_spades.png"},
            {rank: 4, score: 4, suit: "spades", img: "4_of_spades.png"},
            {rank: 5, score: 5, suit: "spades", img: "5_of_spades.png"},
            {rank: 6, score: 6, suit: "spades", img: "6_of_spades.png"},
            {rank: 7, score: 7, suit: "spades", img: "7_of_spades.png"},
            {rank: 8, score: 8, suit: "spades", img: "8_of_spades.png"},
            {rank: 9, score: 9, suit: "spades", img: "9_of_spades.png"},
            {rank: 10, score: 10, suit: "spades", img: "10_of_spades.png"},
            {rank: 11, score: 10, suit: "spades", img: "jack_of_spades.png"},
            {rank: 12, score: 10, suit: "spades", img: "queen_of_spades.png"},
            {rank: 13, score: 10, suit: "spades", img: "king_of_spades.png"}];

// Functions
function grabCard(deck, handObj, cardObj){
    let card = deck.pop();
    handObj.push(card);
    let newCard = document.createElement("span");
    newCard.innerHTML = `<img src="images/${card.img}" height="192px" width="142px">`;
    cardObj.append(newCard);
};

function shuffleDeck(deck){
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    };
};

function clearHandImg(cardObj){
    while (cardObj.firstChild){
        cardObj.removeChild(cardObj.lastChild);
    };
};

function dealFaceDown(deck, handObj, cardObj){
    let card = deck.pop();
    handObj.push(card);
    let newCard = document.createElement("span");
    newCard.innerHTML = `<img id="face-down" src="images/beach-back-large.png" height="192px">`;
    cardObj.append(newCard);
}

function dealDummyCard(cardObj){
    let newCard = document.createElement("span");
    newCard.innerHTML = `<img src="images/beach-back-large.png" height="192px">`;
    cardObj.append(newCard);
}

function flipDealerCard(handObj, cardObj){
    let oldCard = document.getElementById("face-down");
    oldCard.remove();
    let newCard = document.createElement("span");
    newCard.innerHTML = `<img src="images/${handObj[0].img}" height="192px" width="142px">`;
    cardObj.firstChild.append(newCard);
}

// function calculatePoints(handObj){
//     let sum = 0;
//     for (let index = 0; index < handObj.length; index++){        // I work, but without ace logic
//         sum += parseInt(handObj[index].score)
//     }
//     return sum
// };

function calculatePlayerPoints(handObj){
    let sum = 0;
    for (let index = 0; index < handObj.length; index++){
        if (handObj[index].rank === 1 && (sum + handObj[index].score) > 11){
            sum += 1;
        }
        else if (handObj[index].rank === 1){
            sum += 11;
        }
        else{
            sum += parseInt(handObj[index].score);
        }
    };
    if (sum > 21 && handObj[2].rank === 1 && handObj[3].rank === 1){
        sum -= 10;
    }
    else if (sum > 21 && handObj[2].score === 2 && handObj[0].rank === 1 && handObj[1].rank === 1){
        sum -= 10;
    }
    else if (sum > 21 && (handObj[0].rank === 1 || handObj[1].rank === 1)){
        sum -= 10;
    };
    document.getElementById("player-total").innerText = sum;
    return sum;
};

function calculateDealerPoints(handObj){
    let sum = 0;
    for (let index = 0; index < handObj.length; index++){
        if (handObj[index].rank === 1 && (sum + handObj[index].score) > 11){
            sum += 1;
        }
        else if (handObj[index].rank === 1){
            sum += 11;
        }
        else{
            sum += parseInt(handObj[index].score);
        };
    };
    if (sum > 21 && (handObj[0].rank === 1 || handObj[1].rank === 1)){
        sum -= 10;
    };
    return sum;
};

function printPlayerWin(){
    let finalText = document.createElement("span");
    finalText.innerHTML = `<span class="windows-font text-white" style="font-size:30px;">You win!</span>`;
    message.append(finalText);
}

function printDealerWin(){
    let finalText = document.createElement("span");
    finalText.innerHTML = `<span class="windows-font text-white" style="font-size:30px;">The house wins!</span>`;
    message.append(finalText);
}

function printPlayerBust(){
    let finalText = document.createElement("span");
    finalText.innerHTML = `<span class="windows-font text-white" style="font-size:30px;">You busted! The house wins!</span>`;
    message.append(finalText);
}

function printDealerBust(){
    let finalText = document.createElement("span");
    finalText.innerHTML = `<span class="windows-font text-white" style="font-size:30px;">The house busted! You win!</span>`;
    message.append(finalText);
}

function printTie(){
    let finalText = document.createElement("span");
    finalText.innerHTML = `<span class="windows-font text-white" style="font-size:30px;">It's a tie!</span>`;
    message.append(finalText);
}

// Gameplay Logic
let dealersHand = [];
let playersHand = [];
let dealerScore = 0;
let playerScore = 0;
let playerWins = 0;
let dealerWins = 0;

document.getElementById("hit-button").disabled = true;
document.getElementById("stand-button").disabled = true;

flip.addEventListener("click", () => {
    document.getElementById("new-hand-button").disabled = true;
    document.getElementById("hit-button").disabled = false;
    document.getElementById("stand-button").disabled = false;
    clearHandImg(dlHand);
    clearHandImg(pyHand);
    shuffleDeck(deck);
    while (dealersHand < 2){
        dealFaceDown(deck, dealersHand, dlHand);
        grabCard(deck, dealersHand, dlHand);
    };
    while (playersHand.length < 2){
        grabCard(deck, playersHand, pyHand);
    };
    if (playersHand.length >= 2 && dealersHand.length >= 2){
        document.getElementById("flip-button").disabled = true;
    };
    if (calculateDealerPoints(dealersHand) === 21 && calculatePlayerPoints(playersHand) === 21){
        printTie();
        flipDealerCard(dealersHand, dlHand);
        document.getElementById("dealer-total").innerText = 21;
        document.getElementById("player-total").innerText = 21;
        document.getElementById("hit-button").disabled = true;
        document.getElementById("stand-button").disabled = true;
        document.getElementById("new-hand-button").disabled = false;
    }
    else if (calculatePlayerPoints(playersHand) === 21){
        printPlayerWin();
        playerWins++;
        document.getElementById("player-total").innerText = 21;
        document.getElementById("hit-button").disabled = true;
        document.getElementById("stand-button").disabled = true;
        document.getElementById("new-hand-button").disabled = false;
    }
    else if (calculateDealerPoints(dealersHand) === 21){
        printDealerWin();
        dealerWins++;
        flipDealerCard(dealersHand, dlHand);
        document.getElementById("dealer-total").innerText = 21;
        document.getElementById("hit-button").disabled = true;
        document.getElementById("stand-button").disabled = true;
        document.getElementById("new-hand-button").disabled = false;
    };
});

hit.addEventListener("click", () => {
    grabCard(deck, playersHand, pyHand);
    let playerTotal = calculatePlayerPoints(playersHand);
    if (playerTotal === 21){
        document.getElementById("stand-button").disabled = false;
        document.getElementById("hit-button").disabled = true;
    };
    if (playerTotal > 21){
        printPlayerBust();
        dealerWins++;
        // flipDealerCard(dealersHand, dlHand);
        document.getElementById("new-hand-button").disabled = false;
        document.getElementById("hit-button").disabled = true;
        document.getElementById("stand-button").disabled = true;
    };
});

stand.addEventListener("click", () => {
    document.getElementById("stand-button").disabled = true;
    document.getElementById("hit-button").disabled = true;
    flipDealerCard(dealersHand, dlHand);
    let dealerFinal = calculateDealerPoints(dealersHand);
    while (dealerFinal < 17){
        grabCard(deck, dealersHand, dlHand);
        dealerFinal = calculateDealerPoints(dealersHand);
    };
    document.getElementById("dealer-total").innerText = dealerFinal;
    let playerFinal = calculatePlayerPoints(playersHand);
    if (dealerFinal === 21 && playerFinal != 21){
        printDealerWin();
        dealerWins++;
    }
    else if (dealerFinal > 21){
        printDealerBust();
        playerWins++;
    }
    else if (playerFinal > dealerFinal){
        printPlayerWin();
        playerWins++;
    }
    else if (playerFinal < dealerFinal){
        printDealerWin();
        dealerWins++;
    }
    else{
        printTie();
    };
    document.getElementById("new-hand-button").disabled = false;
});

// "New Hand" button acts as a reset while updating player/dealer score
newHand.addEventListener("click", () => {
    for (let index = 0; index < (dealersHand.length); index++){
        deck.push(dealersHand[index]);
    };
    for (let index = 0; index < (playersHand.length); index++){
        deck.push(playersHand[index]);
    };
    dealersHand = [];
    playersHand = [];
    clearHandImg(dlHand);
    clearHandImg(pyHand);
    dealDummyCard(dlHand);
    dealDummyCard(dlHand);
    dealDummyCard(pyHand);
    dealDummyCard(pyHand);
    document.getElementById("flip-button").disabled = false;
    document.getElementById("new-hand-button").disabled = false;
    document.getElementById("hit-button").disabled = true;
    document.getElementById("stand-button").disabled = true;
    document.getElementById("dealer-total").innerText = 0;
    document.getElementById("player-total").innerText = 0;
    document.getElementById("p-wins").innerText = playerWins;
    document.getElementById("d-wins").innerText = dealerWins;
    message.firstChild.remove();
});