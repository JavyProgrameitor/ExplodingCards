//index.js
import { CARD_TYPES, CARD_QUANTITY, POINT_VALUES } from './const.js';
import { Card } from './card.js';

const mainContainer = document.createElement('div');
const letterView = document.createElement('div');
const imgView = document.createElement('img');
const textContainer = document.createElement('div'); 
const btnTakeCard = document.createElement('button');
const btnReboot = document.createElement('button');
const returnButton = document.createElement('button');


document.body.appendChild(mainContainer);
mainContainer.classList.add('mainContainer');

mainContainer.appendChild(returnButton);
returnButton.textContent = 'Portfolio';
returnButton.classList.add('return-button');


mainContainer.appendChild(letterView);
letterView.classList.add('letterView');

letterView.appendChild(textContainer);  
letterView.appendChild(imgView);  
textContainer.classList.add('textContainer');
imgView.classList.add('imgView');  


mainContainer.appendChild(btnTakeCard);
btnTakeCard.textContent = 'Take Card';
btnTakeCard.classList.add('btnTakeCard');

mainContainer.appendChild(btnReboot);
btnReboot.textContent = 'Reboot Play';
btnReboot.classList.add('btnReboot');

const deckArray = [];

// Function img
function getCardImage(cardType) {
  switch (cardType) {
      case CARD_TYPES.BOMB:
          return './src/img/bomb.jpeg';
      case CARD_TYPES.DEFUSE:
          return './src/img/defuse.jpeg';
      case CARD_TYPES.SKIP_TURN:
          return './src/img/skip-turn.jpeg';
      case CARD_TYPES.NOPE:
          return './src/img/nope.jpeg';
      case CARD_TYPES.POINTS:
          return './src/img/points.jpeg';
      default:
          return './src/img/ace.png'; 
  }
}

function createDeckArray() {

  // Create Bomb, Defuse, Skip turn, Nope and Points.
  for (let i = 0; i < CARD_QUANTITY.BOMB; i++) {
    deckArray.push(new Card(CARD_TYPES.BOMB));
  }

  for (let i = 0; i < CARD_QUANTITY.DEFUSE; i++) {
    deckArray.push(new Card(CARD_TYPES.DEFUSE));
  }

  for (let i = 0; i < CARD_QUANTITY.SKIP_TURN; i++) {
    deckArray.push(new Card(CARD_TYPES.SKIP_TURN));
  }

  for (let i = 0; i < CARD_QUANTITY.NOPE; i++) {
    deckArray.push(new Card(CARD_TYPES.NOPE));
  }

  let counter = 0;
  while (counter < CARD_QUANTITY.POINTS) {
    const valueRandom = POINT_VALUES[Math.floor(Math.random() * POINT_VALUES.length)];
    deckArray.push(new Card(CARD_TYPES.POINTS, valueRandom));
    counter++;
  }

  console.log("deckArray create: ", deckArray);
  return deckArray;
}

// Fisher-Yates
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

   
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  console.log("deckArray before deckArrayr: ", array);
  return array;
}

function startPlay() {
 
  let deckArray = shuffle(createDeckArray());

  textContainer.textContent = 'Take a card to start!';
  imgView.src = './src/img/ace.png';


  // Take cards
  btnTakeCard.addEventListener('click', () => {
    if (deckArray.length > 0) {

      let card = deckArray.pop();
    textContainer.textContent = card.toString();
      imgView.src = getCardImage(card.tip);

      console.log("Card start: ", card.toString());
      console.log("Card finish: ", deckArray.length);

    } else {
      textContainer.textContent = 'End of the game';
      imgView.src = './src/img/ace.png';

      btnTakeCard.classList.add('btnReboot');
      btnTakeCard.classList.remove('btnTakeCard');
      btnReboot.classList.add('btnTakeCard');
      btnReboot.classList.remove('btnReboot');

      console.log("There are not card.");
    }
  });

  // Reboot
  btnReboot.addEventListener('click', () => {

    deckArray = shuffle(createDeckArray());


    textContainer.textContent = 'Take a card to begin!';
    imgView.src = './src/img/ace.png';

    btnTakeCard.classList.add('btnTakeCard');
    btnTakeCard.classList.remove('btnReboot');
    btnReboot.classList.add('btnReboot');
    btnReboot.classList.remove('btnTakeCard');


    console.log("Reboot Play. New create deckArray.");
  });
}

returnButton.addEventListener('click', () => {

  window.location.href = 'https://javyprogrameitor.github.io/Portfolio/';

});


  startPlay();
