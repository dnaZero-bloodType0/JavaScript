// 7. Хотелска стая

// const { log } = require("console");

// Хотел предлага 2 вида стаи: студио и апартамент. Напишете функция, която изчислява цената за целия престой за студио и апартамент. Цените зависят от месеца на престоя:

// 

// Студио – 50 лв./нощувка Студио – 75.20 лв./нощувка Студио – 76 лв./нощувка

// Апартамент – 65 лв./нощувка Апартамент – 68.70 лв./нощувка Апартамент – 77 лв./нощувка

// Предлагат се и следните отстъпки:

// · За студио, при повече от 7 нощувки през май и октомври : 5% намаление.

// · За студио, при повече от 14 нощувки през май и октомври : 30% намаление.

// · За студио, при повече от 14 нощувки през юни и септември: 20% намаление.

// · За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.

// Вход

// Получават се 2 аргумента:

// · месецът – May, June, July, August, September или October

// · броят на нощувките – цяло число в интервала [0 … 200]

// Изход

// Да се отпечатат на конзолата 2 реда:

// · На първия ред: “Apartment: {цена за целият престой} lv.”

// · На втория ред: “Studio: {цена за целият престой} lv.”

// Цената за целия престой форматирана с точност до два знака след десетичната запетая.

// Май и октомври Юни и септември Юли и август
function hotelRoom (mesec, broiNoshtuvki){

    let cenaStudio = 0;
    let cenaApartment = 0;
    let krainaCenaStudio = 0;
    let krainaCenaApartment = 0;

    if (mesec === "May" || mesec === "October"){
         cenaApartment = 65;
         cenaStudio = 50;
       if (broiNoshtuvki > 6 || broiNoshtuvki === 14 ) {
             cenaStudio *= 0.95;
             krainaCenaStudio *= broiNoshtuvki; 
             krainaCenaApartment = broiNoshtuvki * cenaApartment;
       } else if ( broiNoshtuvki > 14){
            cenaStudio = cenaStudio * 0.70;
            krainaCenaStudio = cenaStudio * broiNoshtuvki; 
             cenaApartment = cenaApartment * 0.90;
             krainaCenaApartment = broiNoshtuvki * cenaApartment;
       }

    } else if (mesec === "June" || mesec === "September"){
         cenaApartment = 68.70;
         cenaStudio = 75.20
        if (broiNoshtuvki > 14){
             cenaStudio = cenaStudio * 0.80;
             krainaCenaStudio = broiNoshtuvki * cenaStudio;
            cenaApartment = cenaApartment * 0.90;
            krainaCenaApartment = broiNoshtuvki * cenaApartment;
        } else if (broiNoshtuvki > 6){
            cenaApartment = 68.70;
         cenaStudio = 75.20
         krainaCenaApartment = cenaApartment * broiNoshtuvki;
         krainaCenaStudio = cenaStudio * broiNoshtuvki;
        }
        }

    else if (mesec === "July" || mesec === "August"){
         cenaApartment = 77;
         cenaStudio = 76;
        if(broiNoshtuvki > 14) {
         cenaApartment = cenaApartment * 0.90;
         krainaCenaApartment = broiNoshtuvki * cenaApartment;
        } else if (broiNoshtuvki > 6){
            cenaApartment = 77;
         cenaStudio = 76;
         krainaCenaApartment = cenaApartment * broiNoshtuvki;
         krainaCenaStudio = cenaStudio * broiNoshtuvki;
        }
    }  
    

 console.log(`Apartment: ${krainaCenaApartment.toFixed(2)} lv.`);
 console.log(`Studio: ${krainaCenaStudio.toFixed(2)} lv.`)

}
hotelRoom("June",

14);

// Да се отпечатат на конзолата 2 реда:

// · На първия ред: “Apartment: {цена за целият престой} lv.”

// · На втория ред: “Studio: {цена за целият престой} lv.”

// Цената за целия престой форматирана с точност до два знака след десетичната запетая.



