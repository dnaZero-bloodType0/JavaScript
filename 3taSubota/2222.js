// 2. Лятно облекло

// Лято е с много променливо време и Виктор има нужда от вашата помощ. Напишете функция, която спрямо времето от денонощието и градусите да препоръча на Виктор какви дрехи да си облече. Вашия приятел има различни планове за всеки етап от деня, които изискват и различен външен вид, тях може да видите от таблицата.

// Функцията получава два аргумента:

// · Градусите - цяло число в интервала [10…42]

// · Текст, време от денонощието - с възможности - "Morning", "Afternoon", "Evening"










// Да се отпечата на конзолата на един ред: "It's {градуси} degrees, get your {облекло} and {обувки}."
function clothes(degrees, time) {
    let outfit = '';
    let shoes = '';
    
    if (degrees >= 10 && degrees <= 18) {
        switch (time) {
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else if (degrees > 18 && degrees <= 24) {
        switch (time) {
            case "Morning":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else if (degrees >= 25) {
        switch (time) {
            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }
    
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

clothes(18, "Morning");

