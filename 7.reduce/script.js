const people = [
    { name: "Victor", age: 25, budget: 5000 },
    { name: "Gabriel", age: 32, budget: 4000 },
    { name: "Maria", age: 23, budget: 6000 },
  ];

  let suma = people.reduce((first, last)=>{ 
    return first + last.budget;
  },0)
  console.log(suma);

