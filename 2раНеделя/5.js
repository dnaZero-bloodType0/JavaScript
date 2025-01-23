function godzilaVsKong(pariBiudjet, broiStatisti, cenaOblekloStatist){

let dekorFilm = pariBiudjet * 0.1;
let cqlaCenaDrehi = broiStatisti * cenaOblekloStatist;
let otstupkaObleklo = 0;

if (broiStatisti > 150){
   cqlaCenaDrehi = cqlaCenaDrehi - (cqlaCenaDrehi * 0.1);
}
   let obshtaSuma = dekorFilm + cqlaCenaDrehi;

   if (obshtaSuma > pariBiudjet) {
    console.log("Not enough money!");
    let nedostigashtiPari = obshtaSuma - pariBiudjet;
    console.log(`Wingard needs ${nedostigashtiPari.toFixed(2)} leva more.`);
    
}
  else {
    console.log("Action!");
    let ostanaliPari = pariBiudjet - obshtaSuma;
    console.log(`Wingard starts filming with ${ostanaliPari.toFixed(2)} leva left.`)
  }



}
godzilaVsKong(15437.62,

    186,
    
    57.99);





// На конзолата трябва да се отпечатат два реда:

// · Ако парите за декора и дрехите са повече от бюджета:

// o "Not enough money!"

// o "Wingard needs {парите недостигащи за филма} leva more."

// · Ако парите за декора и дрехите са по малко или равни на бюджета:

// o "Action!"

// o "Wingard starts filming with {останалите пари} leva left."

// Резултатът трябва да е форматиран до втория знак след десетичната запетая.