

// SET GAME BOARD //
const iconsList = ["fa fa-diamond", "fa fa-diamond",
                  "fa fa-paper-plane-o", "fa fa-paper-plane-o",
                  "fa fa-anchor", "fa fa-anchor",
                  "fa fa-bolt", "fa fa-bolt",
                  "fa fa-cube", "fa fa-cube",
                  "fa fa-leaf", "fa fa-leaf",
                  "fa fa-bicycle", "fa fa-bicycle",
                  "fa fa-bomb", "fa fa-bomb"];

const cardsContainer = document.querySelector(".deck"); /* deck class from html */

function setGameBoard() {
  const icons = shuffle(iconsList);

  for (let i = 0; i < icons.length; i++){

    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = "<i class ='" + icons[i] + "'</i>"
    cardsContainer.appendChild(card);
    clickCard(card);
  }
}


// CLICK //
let openedCards = []; /* this array will store cards clicked */
let matchedCards = []; /* this array will store matched cards */
let firstClick = true;

function clickCard(card) {

  card.addEventListener("click", function() {
// starts timer and prevent from speeding up //
      if (firstClick){
        startTimer();
        firstClick = false;
      }
    const currentCard = this;
    const previousCard = openedCards[0];
    
    // One card is open already //
    if(openedCards.length === 1) {

      card.classList.add("open", "show");
      openedCards.push(this);

      // We compare 2 opened cards! //
      isMatched(currentCard, previousCard)
      

      addMove();
      rates(moves);
      
      

    } else {
      // we don't have any open cards //
      card.classList.add("open", "show");
      openedCards.push(this);
      }

  });
}

//IS MATCHED?
function isMatched(currentCard, previousCard) {

  if(currentCard.innerHTML === previousCard.innerHTML) {

    // Matched //
    currentCard.classList.add("match");
    previousCard.classList.add("match");

    matchedCards.push(currentCard,previousCard); /* in this case "this" dont work as would take only 8 pair and we need 16 to match icons */

    openedCards = []

    // Check if game has finished //
    gameFinished();

  } else {
     /* setTimeout has to be implemented in order to allow player seeing second card
      before "don't match" return cards to hidden possition after clicking second card */
    setTimeout(function() {
      currentCard.classList.remove("open", "show", "unclickable");
      previousCard.classList.remove("open", "show", "unclickable");

    },1000);
    openedCards = []; /* It will fix bug 2 */

  }

}


// ADD MOVE ON SCREEN //
const moveContainer = document.querySelector(".moves");
let moves = 0;

function addMove(){
  moves++;
  moveContainer.innerHTML = moves;
}


// CHECKING IF GAME FINISHED //
function gameFinished() {

  if (matchedCards.length === iconsList.length){
    modalMessage()
  }
}


// MODAL MESSAGE IF GAME FINISHED //
function modalMessage() {

  // Add final time to modal //
  const totalSeconds = document.querySelector(".totalSeconds");
  const totalMinutes = document.querySelector(".totalMinutes");
  const totalHours = document.querySelector(".totalHours");
  totalSeconds.innerHTML = seconds;
  totalMinutes.innerHTML = minutes;
  totalHours.innerHTML = hours;

  // Add total moves to modal //
  const totalMoves = document.querySelector(".totalMoves");
  totalMoves.innerHTML = moves + 1;

  // NOT WORKING YET. Add total rate to modal //
  const totalRate = document.querySelector(".totalRate");
  totalRate.innerHTML = stars.innerHTML;

  stopTimer();
  playAgainModal();

  modal.style.top = "0%";

}


// RATE //
const stars = document.querySelector(".stars");
function rates(){

  if(moves <= 4){
    stars.innerHTML = `<li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>`;

  }else if(moves > 4 && moves <= 10){
    stars.innerHTML = `<li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>`;

  }else{
    stars.innerHTML = `<li><i class="fa fa-star"></i></li>`;

  }
}

// MODAL //
const modal = document.querySelector(".modal");


// RESTART GAME BOARD BUTTON//
const restartGame = document.querySelector(".restart");
function restartGameBoard(){
  restartGame.addEventListener("click", function(){

    cardsContainer.innerHTML = "";

    setGameBoard();
    resetBoardValues();
  });
}
restartGameBoard();

// RESTART GAME (PLAY AGAIN) BUTTON//
const playAgain = document.querySelector(".playAgain");
function playAgainModal(){
  playAgain.addEventListener("click", function(){

    cardsContainer.innerHTML = "";

    setGameBoard();
    resetBoardValues();// restartGameBoard();

    modal.style.top = "-100%";
  });
}


// RESET BOARD //
function resetBoardValues(){

  openedCards = [];  /* fixes restart button bug pointed out in the review */
  matchedCards =[];
  moves = 0;
  moveContainer.innerHTML = moves;
  stars.innerHTML = `<li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                       <li><i class="fa fa-star"></i></li>`;
  firstClick = true;
  totalTime = 0;
  hoursContainer.innerHTML = "00";
  minutesContainer.innerHTML = "00";
  secondsContainer.innerHTML = "00";
  stopTimer();
}

// SHUFFLE // - Provided by Udacity
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// TIMER TO START COUNTING //
let totalTime = 0;
let secondsContainer = document.querySelector(".seconds");
let minutesContainer = document.querySelector(".minutes");
let hoursContainer = document.querySelector(".hours");
let timeCounter;

function startTimer() {

   // Start time counting//
   timeCounter = setInterval(function() {

       // Add totalTime by 1 //
       totalTime += 1;

       // show time in 00:00:00 format //
       calculateTime(totalTime);

       // Show time on the game board //
       secondsContainer.innerHTML = seconds;
       minutesContainer.innerHTML = minutes;
       hoursContainer.innerHTML   = hours;

   }, 1000);
}

// TIMER TO CALCULATE (totalTime) AND SHOW IN 00:00:00 FORMAT //
function calculateTime(totalTime) {

   seconds = totalTime % 60;
   minutes = Math.floor( (totalTime / 60) % 60);
   hours   = Math.floor(totalTime / 60 / 60);

   if (seconds < 10){
     seconds = "0" + seconds;
   }
   if (minutes < 10){
     minutes = "0" + minutes;
   }
   if (hours < 10){
     hours = "0" + hours;
   }
}

// TIMER TO STOP //
function stopTimer() {

   clearInterval(timeCounter);
}

// START GAME FIRST TIME //
setGameBoard()
