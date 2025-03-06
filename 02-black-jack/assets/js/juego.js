

let deck = [];
let tipos = ['C', 'D', 'H', 'S'];
let especials = ['A', 'J', 'Q', 'K'];

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
	let newCard = deck.shift();
	return newCard;
}
