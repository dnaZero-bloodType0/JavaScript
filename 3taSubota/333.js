// 3. Нов дом

// Марин и Нели си купуват къща не далеч от София. Нели толкова много обича цветята, че Ви убеждава да напишете функция, която да изчисли колко ще им струва, да си засадят определен брой цветя и дали наличния бюджет ще им е достатъчен. Различните цветя са с различни цени.

// цвете Роза Далия Лале Нарцис Гладиола

// Цена на брой в лева 5 3.80 2.80 3 2.50

// Съществуват следните отстъпки:

// · Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена

// · Ако Нели купи повече от 90 Далии - 15% отстъпка от крайната цена

// · Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена

// · Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%

// · Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%

// Функцията получава 3 аргумента:

// · Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"

// · Брой цветя - цяло число в интервала [10…1000]

// · Бюджет - цяло число в интервала [50…2500]

// Да се отпечата на конзолата на един ред:

// · Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left."

// · Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."

// Сумата да бъде форматирана до втория знак след десетичната запетая.

function flowerShop(flowerType, quantity, budget) {
    let totalPrice = 0;
    
    switch (flowerType) {
        case "Roses":
            totalPrice = quantity * 5;
            
            if (quantity > 80) {
                totalPrice *= 0.9; 
            }
            break;
        case "Dahlias":
            totalPrice = quantity * 3.80;
            
            if (quantity > 90) {
                totalPrice *= 0.85; 
            }
            break;
        case "Tulips":
            totalPrice = quantity * 2.80;
           
            if (quantity > 80) {
                totalPrice *= 0.85; 
            }
            break;
        case "Narcissus":
            totalPrice = quantity * 3;
            
            if (quantity < 120) {
                totalPrice *= 1.15; 
            }
            break;
        case "Gladiolus":
            totalPrice = quantity * 2.50;
            
            if (quantity < 80) {
                totalPrice *= 1.20; 
            }
            break;
    }
    
    
    let difference = budget - totalPrice;
    
    if (difference >= 0) {
        return `Hey, you have a great garden with ${quantity} ${flowerType} and ${difference.toFixed(2)} leva left.`;
    } else {
        return `Not enough money, you need ${Math.abs(difference).toFixed(2)} leva more.`;
    }
}

// Примери за извикване:
console.log(flowerShop("Roses", 55, 250));
console.log(flowerShop("Tulips", 88, 260));