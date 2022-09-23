let user = ['Eu',33,'stada mea'];
console.log(user[2]);
const pers = document.querySelector(".user");
pers.innerHTML = user;

if (user.includes('Eu1')) {
    console.log("s-a gasit");
} else {
    console.log("nu s-a gasit");
}

// object

let pets = {
    1: "dog",
    2: "cats",
    3: "mouse",
}
console.log(pets);

pers.innerHTML = pets[1];

//colectia

let animals = [
    {dog:'spike', 
    age:20, 
    color:'gray'},

    {dog:'spike1', 
    age:21, 
    color:'gray1'},

    {dog:'spike2', 
    age:22, 
    color:'gray2'
},
]

console.log(animals[1]);

let persoana = ["Victor",50,"Stefan cel Mare", "Iasi"]

for (let i = 0; i < 2; i++) {
    // const element = persoana[index];
    // console.log(element);
    console.log(persoana[i]);
}

const oras = document.querySelectorAll(".orase>li");
console.log(oras);

// oras.classList.add("city");
for (let i = 0; i < oras.length; i++) {
    const element = oras[i];
    console.log(element);
    element.classList.add("liclass");
}

let images = ["./imagini/download.jpg","./imagini/download (2).jpg","./imagini/download (1).jpg"];

for (let i = 0; i < images.length; i++) {
    const element = images[i];
    console.log(element);
    const myGalery = document.querySelector(".galery");
    const myImg = document.createElement("img");
    myGalery.appendChild(myImg);
    myImg.src = element;
}

