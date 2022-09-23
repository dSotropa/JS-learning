// class User{
//     constructor(name, age, image){
//         this.name = name;
//         this.age = age;
//         this.image = image;
//     }
//     description(){
//         console.log(this.name, "my friend", this.age);
//         return this;
//     }
//     qwerty(){
//         console.log(this.age, "best age");
//         return this;
//     }

// }

// const userOne = new User("Ion", 20, "./imagini/pic1.jpg");
// const userTwo = new User ("Dan", 30);

// console.log(userOne.name);

// userTwo.description().qwerty();

// userOne.qwerty();

// const div = document.querySelector(".main");
// const divUser = document.createElement("div");
// div.appendChild(divUser);

// // div.innerHTML = userOne.name + userOne.age;
// divUser.innerHTML = `<div><h1>${userOne.name}</h1> <h2>${userOne.age}</h2><img src="${userOne.image}" alt=""></div> `;
// divUser.innerHTML += `<div><h1>${userTwo.name}</h1> <h2>${userTwo.age}</h2></div>`;

class Produs {
  constructor(img, nume, memory, ram, screen, color) {
    this.img = img;
    this.nume = nume;
    this.memory = memory;
    this.ram = ram;
    this.screen = screen;
    this.color = color;
  }
  description(price, discount) {
    this.price = price;
    this.discount = discount;

    samDiv.innerHTML += `
    <div>
<img src = "${this.img}">
<p class="nume">${this.nume}</p>
<p><span>Memory: </span> ${this.memory}</p>
<p><span>Ram: </span> ${this.ram}</p>
<p><span>Screen: </span> ${this.screen}</p>
<p><span>Color: </span> ${this.color}</p>
<span class="pretDiscount">Price: ${this.price}$ Discount: ${this.discount}%</span></p>
<p><span class="newPrice"> New Price: ${this.price-(this.price*this.discount/100)}$</span></p>
</div>
`;
const fistElem = document.getElementsByClassName("pretDiscount");
// console.log(fistElem);
    for (let index = 0; index < fistElem.length; index++) {
        const element = fistElem[index];
        console.log(fistElem[index]);
        
        if (discount == 0) {
            fistElem[index].className+="on";
        }else{
            fistElem[index].className+="off";
        }
    }
  }

}

const sanmusung = new Produs(
  "./imagini/samsung.jpg",
  "Samsung Galaxy S21", 
  "4 gb",
  "64 gb",
  "6.2 inch",
  "Silver"
  
);
const xiaomi = new Produs(
  "./imagini/xiaomi.jpg",
  "Xiaomi Note 9",
  "6 gb",
  "64 gb",
  "6.67 inch",
  "Gray"
);
const iphone = new Produs(
  "./imagini/iphone.jpg",
  "Apple iPhone 11",
  "4 gb",
  "128 gb",
  "6.1 inch",
  "black"
);

const sams = document.querySelector(".product");
const head = document.querySelector(".top")

const samDiv = document.createElement("div");
const text = document.createElement("span");

text.classList.add("top-text");

sams.appendChild(samDiv);
head.appendChild(text);

samDiv.classList.add("prod-div");

text.textContent = "discount on all smartphones up to 15%";

sanmusung.description(500,1);
xiaomi.description(400,5);
iphone.description(600,0);

