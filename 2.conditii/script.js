// Creați un algoritm care va cere utilizatorului să introducă o parolă.
// Dacă utilizatorul introduce
// parola „qwerty”,  scoateți expresia: „Bine ați venit!”, în caz contrar, „Ceva a mers prost...”

// let x = prompt("enter password");

// if(x == 'qwerty'){
//     console.log('Bine ati venit!');
// }else{
//     console.log('Ceva a mers prost...');
// }

// Creați un algoritm pentru setarea unei parole cu confirmare. După pornirea programului ar trebui să întrebe:
// 'Introdu parola'. După introducerea primei parole, programul ar trebui să scrie: „Introduceți parola din nou”. În cazul în care 
// parolele introduse sunt egale între ele,  programul ar trebui să afișeze: „Parola este setată”, în caz contrar: „Parolele nu sunt
// egale'.

// let y = prompt("confirm password");

// if(x == y){
//     console.log('parola a fost setata');
// }else{
//     console.log('parola introdusa nu este egala cu cea anterioara');
// }

// Creați un algoritm care va cere utilizatorului temperatura de afară. Dacă valoarea introdusă
// va fi mai mare de 15, programul va returna valoarea 'Foarte cald'. Dacă valoarea introdusă este sub 5
// grade-„Rece”. Pentru alte valori, returnați „Normal”. De exemplu,
// utilizatorul a introdus valoarea 10. Răspuns: „Normal”

// let temp = prompt("introduceti temperatura:");

// if(temp >= 15){

//     console.log("Foarte cald");

// }else if(temp <= 5 ){

//     console.log("Rece");

// }else{

//     console.log("Normal");

// }

// operator ternar

// let z = 20;
// let s = 30;

// let result = (z > s) ? 'first' : 'second'
// console.log(result);

// const title2 = document.querySelector(".title");
// if(title2 != null){
//     console.log('ok');
// }else{
//     console.log('nu e ok');
// }
// let d = 123;
// function name() {
   
//     let e = 234;
//     console.log(d+e);
// }

// name();

// console.log();

// function func2(first, second) {

//     return first * second;

// }

// let cosnt1 = func2(5,10);

// console.log(cosnt1);

// const divul = document.querySelector(".my-div");

// divul.addEventListener("click", clickEvent);

// function clickEvent() {
//    divul.classList.add("bg");
    
// }

// Programul cere un nume. După aceea, solicită introducerea unui varstei.
// Apoi afișează mesajul: „numele dvs. ____,  vârsta ta _____ ani "
// Exemplu:
// numele dvs.Ion,  vârsta ta 40 ani 

// let nume = prompt("Introduceti numele");
// let varsta = prompt("Introduceti varsta");

// console.log("Numele dvs. este "+nume+ " si aveti varsta de "+varsta);

// Programul vă cere să vă introduceți vârsta. Dacă este mai mare de 18, afisam „bine”.
// Dacă mai puțin de 18 afisaiți „trebuie să așteptați .... ani”, trebuie să calculați
// câți ani au mai rămas de așteptat până la 18 ani.

// let age = prompt("introduceti varsta");
// const major = 18;

// if(age > 18){
//     console.log("bine");
// }else{
//     console.log("trebuie sa mai asteptati "+(major-age)+" ani");
// }

// Scrieți construcția if folosind operatorul ternar

	// const enterPass = prompt('enter pass');

    // let result = (enterPass == 'qwerty') ? 'good pass' : 'bad pass';
    // console.log(result);

    // afișați un mesaj cu alert . Adăugați ceea ce lipsește pentru ca mesajul să fie văzut.

// function show() { 
//     alert( 'hello js!' );
    
// }
// show();

// Completați câmpurile pentru a obține 15 în console.log.
// function sum() {
//     const x = 5
//     const y = 10
//     console.log(x+y)
// }
// sum();

// Lucrul cu parametrii funcției (argumentele) și returnarea. Completați câmpurile pentru a obține 20 în console.log.
// function sum(x,y) {
//     return x-y
// }
// const result = sum(21,1)
// console.log(result)

// afișați variabila one în console.log()
// function testBlock() {
// 	let one = 50;
//     console.log(one);
// 	}
//     testBlock();

// Teorie
//  variabilele din interiorul unei funcții sunt numite locale, nu sunt disponibile în altă parte doar în interior
// aceastei funcție
// ----------------------------------------
// Utilizand concatenare afiseaza in console.log() „Hello Johnny”

// let name = "Jony";

// function sayHello() {
//     let message = "Hello "
//     console.log(message+name);
// }
// sayHello();

