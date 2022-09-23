let persoana = ["Victor", 50, "Stefan cel Mare", "Iasi"];

persoana.forEach((element, data) => {
  console.log(element, data);
});
function name(params) {}
() => {};

const divul = document.querySelectorAll(".main-div > p");
console.log(divul);

// divul.forEach(element => {
//     element.addEventListener("click", eveniment);
// });

// function eveniment() {
//     alert("Alerta!")
// }

divul.forEach((element) => {
  element.addEventListener("click", () => {
    alert("Alerta!");
  });
});

// function eveniment() {
//     alert("Alerta!")
// }

let animal = { dog: "spike", age: 20, color: "gray" };
let animalList = document.createElement("ul");
const problema = document.querySelector(".lista");
problema.appendChild(animalList);
for (const key in animal) {
    // console.log(key);
    console.log(animal[key]);
    animalList.innerHTML += `<li> ${animal[key]} </li>`
}

let human = [60, 55, 90, 100];

let humanResult = human.map((value, index)=>{
    return value;
    // return index;
})
console.log(humanResult);

//creare JSon objects

let collectionCars = [
    {
        imagime: "./imagini/camaro.jpg",
        name: "Chevrolet Camaro",
        year: 1966,
        hp: 300
    },
    {
        imagime: "./imagini/ford.jpg",
        name: "Ford Mustang Boss 429",
        year: 1969,
        hp: 375
    },
    {
        imagime: "./imagini/mercedes.jpg",
        name: "Mercedes-Benz W198",
        year: 1960,
        hp: 240
    },

];

const carsSelect = document.querySelector(".cars");
const cardDiv = document.createElement("div");
carsSelect.appendChild(cardDiv);

// cardDiv.innerHTML = collectionCars;

collectionCars.forEach(car => {
    console.log(car.imagime);
    let arguments = `
    <div>
    <h1>${car.name}</h1>
    <img src="${car.imagime}" alt="">
    <p>${car.year}</p>
    <p>${car.hp}</p>
    </div>
    `
    cardDiv.innerHTML += arguments;
});

//GYM project

const lis = document.querySelectorAll(".gymList>li");
console.log(lis);

lis.forEach(li => {
    console.log(li);
   li.addEventListener("click", ()=>{
    
    lis.forEach(li => {
        li.classList.remove("activ");
    });
    li.classList.add("activ");
   }) 
});

const right = document.querySelector(".div-right");
const poza1 = document.createElement("img");
const poza2 = document.createElement("img");
const poza3 = document.createElement("img");
const titlu1 = document.createElement("h1")
const titlu2 = document.createElement("h1")
const titlu3 = document.createElement("h1")
const info1 = document.createElement("p");
const info2 = document.createElement("p");
const info3 = document.createElement("p");

right.appendChild(poza1);
right.appendChild(poza2);
right.appendChild(poza3);
right.appendChild(titlu1);
right.appendChild(titlu2);
right.appendChild(titlu3);
right.appendChild(info1);
right.appendChild(info2);
right.appendChild(info3);

poza1.src = "./imagini/first.jpg";
poza1.classList.add("poza1");
poza2.src = "./imagini/second.jpg";
poza2.classList.add("poza2");
poza3.src = "./imagini/third.jpg";
poza3.classList.add("poza3");



