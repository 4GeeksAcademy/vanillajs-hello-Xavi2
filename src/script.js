const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was excercising', 'during my lunch', 'while I was praying'];
console.log(who.length);
console.log(action.length);
console.log(what.length);
console.log(when.lenght);

const randomExcuse = who[Math.floor(Math.random() * who.length)] + ' ' + action[Math.floor(Math.random() * action.length)] + ' ' + what[Math.floor(Math.random() * what.length)]
console.log(randomExcuse)
window.onload = (event) => {
    document.getElementById("excuse").textContent = (randomExcuse);
};