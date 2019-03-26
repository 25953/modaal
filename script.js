const content = document.querySelectorAll(".content");


for (var i = 0; i < content.length; i++) {
	let modaalNode = content[i];
	modaalNode.parentNode.removeChild(modaalNode);
}

const modaalKnoppen = document.querySelectorAll(".knop-1");
const modaalKnoppenArray = [];

let modaalAchtergrond = document.createElement('div');
modaalAchtergrond.className = 'modaal-achtergrond';
let modaal = document.createElement('div');
modaal.className = 'modaal';
let sluitKnop = document.createElement('button');
sluitKnop.className = 'sluit-knop';
sluitKnop.innerHTML = '&#x00D7;';

const voegInhoudToe = (event) => {
	const teller = modaalKnoppenArray.indexOf(event.target);
	console.log(teller);
	modaal.appendChild(sluitKnop);
	modaal.appendChild(content[teller]);
	modaalAchtergrond.appendChild(modaal);
	document.body.appendChild(modaalAchtergrond);
}

const sluitModaal = () => {
	modaal.innerHTML = '';
	modaalAchtergrond.innerHTML = '';
	document.body.removeChild(modaalAchtergrond);
}

sluitKnop.addEventListener('click', sluitModaal);

for(let i = 0; i < modaalKnoppen.length; i++) {
	modaalKnoppenArray.push(modaalKnoppen[i]);
	modaalKnoppen[i].addEventListener('click', voegInhoudToe);
}
