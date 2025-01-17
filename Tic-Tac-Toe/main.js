document.getElementById("veepn-guard-alert").innerHTML = "Hello World";
D = document.querySelectorAll(".square").length;
console.log(D);
S = document.getElementsByTagName("p");
console.log(S);
// document.getElementById("p1-name").textContent = "Amara";
// document.getElementById("p1-name").append(" Metu");
// document.getElementById("p2-name").textContent = "Somto";
k = document.querySelector("h1").textContent;
console.log(k);
console.log(document.title);
console.log(document.title.indexOf("T"));
console.log(document.title[0]);
// console.log(document.title.replace("Tic Tac Toe", "S"));
console.log(document.title.includes("JavaScript"));
console.log("Tic Tac Toe".toUpperCase());
let scrub = "guy that thinks he's fly";
let busta = scrub; // busta gets the initial value of scrub
scrub = "guy that can't get no love from me"; // changing scrub doesn't affect busta since strings are passed by value
console.log(document.textContent);
const players = [
  { name: "Amara", symbol: "X" }, // First player with X symbol
  { name: "Everyone", symbol: "O" }, // Second player with O symbol
];
document.getElementById("p1-name").textContent = players[0].nam;
document.getElementById("p2-name").textContent = players[1].nam;
document.querySelector(".square").textContent = players[0].Symbol;
const squares = document.querySelectorAll(".square");
squares[5].textContent = players[1].symbol;
squares[5].style.backgroundColor = "red";
squares[5].style.color = "white";
squares[5].style.fontSize = "5rem";
typeof ["J", "S"] === "array";
