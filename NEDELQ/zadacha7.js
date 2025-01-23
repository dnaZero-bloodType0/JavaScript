// Ресторант отваря врати и предлага няколко менюта на преференциални цени:

// • Пилешко меню – 10.35 лв.

// • Меню с риба – 12.40 лв.

// • Вегетарианско меню – 8.15 лв.

// Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.

// Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката).

// Цената на доставка е 2.50 лв и се начислява най-накрая.

// Вход

// От конзолата се четат 3 реда:

// · Брой пилешки менюта – цяло число в интервала [0 … 99]

// · Брой менюта с риба – цяло число в интервала [0 … 99]

// · Брой вегетариански менюта – цяло число в интервала [0 … 99]

// Изход

// Да се отпечата на конзолата един ред: "{цена на поръчката}"
function dostavkaHrana (brPileshkiMenuta, brMenutaRiba, vegiMenuta) {
 
    let vsichkiPileshki = 10.35 * brPileshkiMenuta;
    let vsichkiRiba = 12.40 * brMenutaRiba;
    let vsichkiVegi = 8.15 * vegiMenuta;
    let obshtaSuma = vsichkiPileshki+vsichkiRiba+vsichkiVegi;
    
    let desert = obshtaSuma * 0.2;

    let cenaNaCqlataPoruchka = obshtaSuma+desert+2.50;
    
console.log(cenaNaCqlataPoruchka);

}
dostavkaHrana (2,4,3);