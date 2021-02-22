//console.log("Bienvenue dans le monde Hybride");

// déclaration de la méthode calcul

/*function calcul() { 
console.log("Différence entre var et let")
  let i;

  for (i = 0; i < 10; i++) {
    console.log("i= " + i);
  }
  
  console.log("i final = " + i); // un probleme
}


// appel de la méthode calcul
calcul();*/

// ********** Les Types en TypeScript
/*
let moy: number = 16;

//moy = "abc";

console.log(moy);

let variable: any

variable = 18
variable = "abc"

// déclaration d'un tableau
let tab: any[] = [20, "abc", true, false, 'a']
// parcours d'un tableau en utilisant un foreach
let i : any;
for (i of tab) { 
  console.log(i)
}
*/

// Le casting en typescript
/*
let message: string;
message = "abc";
let res: boolean = message.startsWith('a');

let msg: any;
msg = "abc";
let r: boolean = (<string>msg).startsWith('a');
*/


// Arrow function

/*
// Déclaration classique
function test(x: number, y: number) {
  console.log(x + y);
}
 
// test(10,20);

// à l'aide de la nouvelle syntaxe

let myfunction = (a: number, b: number) => { console.log(a + b) }  // une arrow function
let myfunction2 = (a, b) => { console.log(a + b) } 

myfunction(1, 2);
myfunction2('1', '2');
*/

// Les interfaces en TypeScript


// export c'est l'équivalent de public(java)
// les interfaces en typescript permettent de développer des modèles


import { Etudiant, Personne } from './modeles';

function affiche(p : Personne) {
  console.log(p.name + " " + p.age);
}
 
let affichage = (p : Personne) => { console.log(p.name +" "+p.age)} // arrow function
 
affichage(

  {
    name: "Jean",
    age: 30
}
);

//let e: Etudiant = new Etudiant("Amine","Mezghich");
//e.name = "Amine";
//e.university = "ENSI";
//e.information();

//let e2: Etudiant = new Etudiant();
let e3: Etudiant = new Etudiant("","Amine");
// Les classes en TypeScript:

