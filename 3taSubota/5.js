// Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според града:

// Напишете функция, която получава аргументи: продукт (низ), град (низ) и количество (число),
//  и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град.

// град / продукт coffee water beer sweets peanuts

// Sofia 0.50 0.80 1.20 1.45 1.60

// Plovdiv 0.40 0.70 1.15 1.30 1.50

// Varna 0.45 0.70 1.10 1.35 1.55
function request5 (product, town, pieces){

if ( town === "Sofia") {

   let kafe = pieces * 0.50;
   let voda = pieces * 0.80;
   let bira = pieces * 1.20;
   let sladki = pieces * 1.45;
   let fastuci = pieces * 1.60;
 switch (product){
    case "coffee" :
    console.log(kafe); break;
    case "water": console.log(voda);break;
    case "beer" : console.log(bira);break;
    case "sweets" : console.log(sladki);break;
    case "peanuts" : console.log(fastuci);break; 
 }

} else if (town === "Plovdiv") {

    let kafe = pieces * 0.40;
    let voda = pieces * 0.70;
    let bira = pieces * 1.15;
    let sladki = pieces * 1.30;
    let fastuci = pieces * 1.50;
  switch (product){
     case "coffee" :
     console.log(kafe); break;
     case "water": console.log(voda);break;
     case "beer" : console.log(bira);break;
     case "sweets" : console.log(sladki);break;
     case "peanuts" : console.log(fastuci);break; 
  } 
} else if (town === "Varna") {

    let kafe = pieces * 0.45;
    let voda = pieces * 0.70;
    let bira = pieces * 1.10;
    let sladki = pieces * 1.35;
    let fastuci = pieces * 1.55;
  switch (product){
     case "coffee" : console.log(kafe); break;
     case "water": console.log(voda);break;
     case "beer" : console.log(bira);break;
     case "sweets" : console.log(sladki);break;
     case "peanuts" : console.log(fastuci);break; 
  }
}


}
request5("coffe", "Varna", "2");      