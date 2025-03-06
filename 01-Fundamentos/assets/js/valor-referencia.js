
let a = 10;
let b = a;

a = 20;

console.log(a, b);


let juan = {name: "Juan"};
let ana  = {...juan};

ana.name = "Ana";

console.log({juan, ana});

const changeName = ({...persona}) => {
	persona.name = 'Tony';
	return persona
}

let peter = {name: 'Peter'};
let tony  = changeName(peter);

console.log({peter, tony});