

let deck = [];
let tipos = ['C', 'D', 'H', 'S'];
let especials = ['A', 'J', 'Q', 'K'];


const btnNew  = document.querySelector('#btnNew');
const btnDraw = document.querySelector('#btnDraw');
const btnStop = document.querySelector('#btnStop');

const htmlPts = document.querySelectorAll('small');
const playerCards = document.querySelector('#player-cards');
const machineCards = document.querySelector('#machine-cards');

let playerPts  = 0;
let machinePts = 0;

const makeDeck = () => {
	for (let i = 2; i <= 10; i++){
		for(let tipo of tipos){
			deck.push(i + tipo);
		}
	}
	for (let especial of especials){
		for (let tipo of tipos){
			deck.push(especial+tipo);
		}
	}	
	
	console.log(deck);
}

makeDeck();

const drawCard = () => {
	deck = _.shuffle(deck);
	let newCard = deck.pop();
	return newCard;
}

const cardValue = (carta) => {
	const value = carta.substring(0, carta.length - 1);
	return (isNaN(value)) ?
			(isNaN(value) === 'A') ? 11 : 10
			: value * 1;
	/* let puntos = 0;
	if (isNaN(value)){
		console.log("No es un número");
		puntos = (value === 'A') ? 11 : 10;
	} else {
		console.log('Es un número');
		puntos = value * 1;
	}
	console.log(puntos); */
}

/* const valor = cardValue(drawCard()); */
/* console.log({valor}); */

btnDraw.addEventListener('click', () => {
	const card = drawCard();
	playerPts  = playerPts + cardValue(card);
	console.log(playerPts);
	htmlPts[0].innerText = playerPts;

	const newCard = document.createElement('img')
	newCard.src = `./assets/cartas/${card}.png`;
	newCard.classList.add('carta');
	playerCards.append(newCard);

	if (playerPts > 21){
		btnDraw.disabled = true;
		console.warn("Perdiste!")
	} else if (playerPts === 21){
		btnDraw.disabled = true;
		console.warn("21, genial!!")
	}


});

