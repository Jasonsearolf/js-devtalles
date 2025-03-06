
/* function crearPersona(nombre, apellido) {
	return {
		nombre,
		apellido,
	}
}
 */
/* const crearPersona = (nombre, apellido) => {
	return {
		nombre,
		apellido,
	}
} */

const crearPersona = (nombre, apellido) => ({nombre, apellido});


let herName =  "Mayca";
let herLastname = "Aspera";

console.log(crearPersona("Jason", "Flores"));
console.log(crearPersona( herName, herLastname));

function printArgs(){
	console.log(arguments);
}

const printArgs2 = (hisName, ...args) => {
	return args;
}
/* const printArgs2 = (...args) => ({args}); */

/* printArgs("Jose", 23, false, {pais: "Perú", ciudad: "Lima"}); */
/* console.log(printArgs2("Jose", 23, false, {pais: "Perú", ciudad: "Lima"})); */
const [hisAge, hisStatus] = printArgs2("Jose", 23, false, {pais: "Perú", ciudad: "Lima"});

/* const hisName = persona[0];
const hisAge = persona[1]; */

/* console.log(printArgs2); //error */
console.log(hisAge);

let { apellido: lastName } = crearPersona("Juan", "Perez");

console.log({lastName});


let tony = {
	name: "Tony",
	age: 43,
	power: "Programmer",
}

const printPlayer = (...personaje) => {
	/* console.log(personaje.name);
	console.log(personaje.age);
	console.log(personaje.power); */
	console.log(...personaje);
}
printPlayer(tony);