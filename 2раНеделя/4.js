// 4. Магазин за детски играчки

// Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. С парите, които ще спечели иска да отиде на екскурзия.

// Цени на играчките:

// · Пъзел - 2.60 лв.

// · Говореща кукла - 3 лв.

// · Плюшено мече - 4.10 лв.

// · Миньон - 8.20 лв.

// · Камионче - 2 лв.

// Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена.
//  От спечелените пари Петя трябва да даде 10% за наема на магазина. Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.

// Вход

// От конзолата се четат 6 реда:

// 1. Цена на екскурзията - реално число в интервала [1.00 … 10000.00]

// 2. Брой пъзели - цяло число в интервала [0… 1000]

// 3. Брой говорещи кукли - цяло число в интервала [0 … 1000]

// 4. Брой плюшени мечета - цяло число в интервала [0 … 1000]

// 5. Брой миньони - цяло число в интервала [0 … 1000]

// 6. Брой камиончета - цяло число в интервала [0 … 1000]

// Изход

// На конзолата се отпечатва:

// · Ако парите са достатъчни се отпечатва:

// o "Yes! {оставащите пари} lv left."

// · Ако парите НЕ са достатъчни се отпечатва:

// o "Not enough money! {недостигащите пари} lv needed."


// Резултатът трябва да се форматира до втория знак след десетичната запетая.
function kidStore (cenaEkskurziq, broiPuzeli, broiKukli, broiMecheta, broiMinioni, broiKamioncheta){

    let obshtaSuma = broiPuzeli * 2.60 + broiKukli * 3 +broiMecheta* 4.10 + broiMinioni * 8.20 + broiKamioncheta * 2;

    let broiIgrachki = broiPuzeli+broiKukli+broiMecheta+broiMinioni+broiKamioncheta;

      if (broiIgrachki >= 50){
     let otstupka25 = obshtaSuma - (obshtaSuma * 0.25);
     let naem10 = otstupka25 - (otstupka25 * 0.1); 
     let ostavashtiPari = naem10 - cenaEkskurziq;
     console.log(`Yes! ${ostavashtiPari.toFixed(2)} lv left.`);
    } 
 else {
        let naem10 = obshtaSuma - (obshtaSuma*0.1); 
        let bezOtstupka = obshtaSuma - naem10 ;
        let allMoney = obshtaSuma - bezOtstupka;
        let theLastMoney = cenaEkskurziq - allMoney;  
        console.log(`Not enough money! ${theLastMoney.toFixed(2)} lv needed.`);
       }

}
kidStore(40.8,

    20,
    
    25,
    
    30,
    
    50,
    
    10);