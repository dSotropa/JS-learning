import { CardFunction } from "./function.js";
import { jerry, spike, tom } from "./listaPersonaje.js";

// let colors ={
//     first: 'red',
//     second: 'blue',
//     third: 'white'
// }

// function Culori(first, second, third) {
//     this.first = first;
//     this.second = second;
//     this.third = third;
// }

// const obj = new Culori("red", "blue", "white");
// console.log(obj);

// //adaugarea mai multor methope pe contructor

// Culori.prototype.altaCuloare = function () {
//     console.log(`Roses are ${this.first},  violets are ${this.second}`);
// }

// obj.altaCuloare();

const carduri = document.querySelector(".cards");
const top = document.querySelector(".top");
const imagine = document.querySelector(".top");
const text = document.querySelector(".top");

const personaje = document.createElement("div");
const head = document.createElement("div");
const image = document.createElement("img");
const txt = document.createElement("span");

personaje.classList.add("main-div");
head.classList.add("top-bar");
image.classList.add("poza");
txt.classList.add("text");

carduri.appendChild(personaje);
top.appendChild(head);
imagine.appendChild(image);
text.appendChild(txt);

image.src = "./imagini/t&j.jpg";
txt.textContent = "you are welcome, Tom, Jerry and Spike!";

CardFunction.prototype.cartoons = function () {
  const poze = `
    <div class="personaje">
    <img src="${this.imagine}">
    <div class="linie"></div>
    <h3>${this.nume}</h3>
    <span>${this.type}</span>
    </div>
    `;
  personaje.innerHTML += poze;
};

spike.cartoons();
tom.cartoons();
jerry.cartoons();

// MODULE

// const picture = new Photo('./imagini/spike.png', 'home in forest', 'thumb');

// const divImg = document.querySelector(".imagine");
// const items = document.createElement("img");
// divImg.appendChild(items);

// function Photo(src, alt, thumb) {
//   this.src = src;
//   this.alt = alt;
//   this.thumb = thumb;
  
// }

// Photo.prototype.poze = function(ams) {
//   items.src = this.src;
//   items.alt = this.alt;
//   items.classList.add(this.thumb);

// }

// picture.poze();


