let burger = document.querySelector(".toggle");
let navBar = document.querySelector(".nav");

// burger.addEventListener("click", button);

// function button() {
//     navBar.classList.toggle("on");  
// }

burger.addEventListener("click", ()=>{
    navBar.classList.toggle("on"); 
});

//eveniment scroll

let head = document.querySelector(".header");

window.addEventListener("scroll", ()=>{
    let scr = window.scrollY;
    console.log(scr);
    if(scr > 135){
        head.classList.add("collor");
    }else{
        head.classList.remove("collor");
    }
});

//input event

let btn = document.querySelector(".button");

btn.addEventListener("click", ()=>{
    let text = document.querySelector(".inpt").value;
    console.log(text);
    if (text.includes("*") || text.includes("#") ) {
        alert("Simbols not allowed!")
    }else if(Number(text) ){
        alert("Numbers not allowed!")
   
    }
})


// random method

//cu zecimale
let rand = Math.random()*3;
console.log(rand);

//numere intregi
let var2 = Math.floor(Math.random()*30);
console.log(var2);

let arr = ["Ion","Vasile","Grigore","Costica"];

// let arrMath = arr[Math.floor(Math.random()*arr.length)]

// console.log(arrMath);

function arrMath(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}
console.log(arrMath(arr));

//tema 

let array = ["rgba(245, 40, 145, 0.8)","rgba(125, 65, 96, 0.8)", "rgba(234, 188, 212, 0.8)","rgba(65, 15, 41, 0.8)"]

//de generat culorile de mai sus in div - dupa ce am apasat un buton

let randBtn = document.querySelector(".random-color");

randBtn.addEventListener("click", ()=>{
    const randum = colorRand();

    randBtn.style.backgroundColor= array[randum]
})
function colorRand() {
   
    return Math.floor(Math.random()*array.length);
}



