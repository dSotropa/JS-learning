console.log("Hello world!")

let number = 49;

console.log(number);

let number2 = 44;

console.log(number+number2);

let number3 = 55;

console.log((number+number2+number3)/3);

let num1 = 100;

let num2 = 10;

let res = 100 - (num1 /num2);

console.log(res);

let n1 = "123x";
let n2 = 2;

console.log(n1*n2);


// lucru cu elemente htm

const container = document.querySelector(".container");
console.log(container);
const title = document.createElement("p");
container.appendChild(title);
title.textContent = "acesta este un paragraf";
title.classList.add("active");

// crearea nmai multor elemente html

let lista = `
<ul class = "nav">
<li>rand1</li>
<li>rand2</li>
<li>rand3</li>
</ul>
`
container.innerHTML = lista;
const container2 = document.querySelector(".container2");
const hyperlink = document.createElement("a");
container2.appendChild(hyperlink);
hyperlink.classList.add("link");
hyperlink.textContent = "acesta este un link";
hyperlink.href = "https://www.jondjones.com/tactics/productivity/21-amazing-visual-studio-code-extensions-2022-edition/"

const imagine = document.querySelector(".imag");
const image = document.createElement("img");
imagine.appendChild(image);
image.src = "./poze/download.jpg";
image.classList.add("poza");

// ===========================DOM2======================

const divInsert = document.querySelector(".insertAdjacent");
const elem = document.createElement("p");
divInsert.appendChild(elem);

const elem2 = document.createElement("h1");
// divInsert.appendChild(elem2);

divInsert.insertAdjacentElement("afterbegin", elem2)


