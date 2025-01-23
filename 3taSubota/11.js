// Магазин за плодове през работните дни работи на следните цени:

// плод banana apple orange grapefruit kiwi pineapple grapes

// цена 2.50 1.20 0.85 1.45 2.70 5.50 3.85

// Събота и неделя магазинът работи на по-високи цени:

// плод banana apple orange grapefruit kiwi pineapple grapes

// цена 2.70 1.25 0.90 1.60 3.00 5.60 4.20

// Напишете функция, която получава аргументи:плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), 
// ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) 
// и количество (число) и пресмята цената според цените от таблиците по-горе.
//  Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. При невалиден ден от седмицата или невалидно име на плод да се отпечата "error".
function fruitStore(plod, den, kolichestvo) {



    if (den === "Monday" || den === "Tuesday" || den === "Wednesday" || den === "Thursday" || den === "Friday") {

        let moneyB = kolichestvo * 2.50;
        let moneyA = kolichestvo * 1.20;
        let moneyO = kolichestvo * 0.85;
        let moneyG = kolichestvo * 1.45;
        let moneyK = kolichestvo * 2.70;
        let moneyP = kolichestvo * 5.50;
        let moneyGrapes = kolichestvo * 3.85;
        switch (plod) {
            case "banana": console.log(moneyB.toFixed(2)); break;
            case "apple": console.log(moneyA.toFixed(2)); break;
            case "orange": console.log(moneyO.toFixed(2)); break;
            case "grapefruit": console.log(moneyG.toFixed(2)); break;
            case "kiwi": console.log(moneyK.toFixed(2)); break;
            case "pineapple": console.log(moneyP.toFixed(2)); break;
            case "grapes": console.log(moneyGrapes.toFixed(2)); break;
            default: console.log("error"); break;
        }

    } else if (den === "Saturday" || den === "Sunday") {
        let moneyB = kolichestvo * 2.70;
        let moneyA = kolichestvo * 1.25;
        let moneyO = kolichestvo * 0.90;
        let moneyG = kolichestvo * 1.60;
        let moneyK = kolichestvo * 3.00;
        let moneyP = kolichestvo * 5.60;
        let moneyGrapes = kolichestvo * 4.20;
        switch (plod) {
            case "banana": console.log(moneyB.toFixed(2)); break;
            case "apple": console.log(moneyA.toFixed(2)); break;
            case "orange": console.log(moneyO.toFixed(2)); break;
            case "grapefruit": console.log(moneyG.toFixed(2)); break;
            case "kiwi": console.log(moneyK.toFixed(2)); break;
            case "pineapple": console.log(moneyP.toFixed(2)); break;
            case "grapes": console.log(moneyGrapes.toFixed(2)); break;
            default: console.log("error"); break;
        }

    } else {
        console.log("error");

    }


}
fruitStore("apple", "Tuesday", 2);


