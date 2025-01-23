// 12. Търговски комисионни

// Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите:

// Град 0 ≤ s ≤ 500 500 < s ≤ 1 000 1 000 < s ≤ 10 000 s > 10 000

// Sofia 5% 7% 8% 12%

// Varna 4.5% 7.5% 10% 13%

// Plovdiv 5.5% 8% 12% 14.5%

// Напишете функция, която получава име на град (стринг) и обем на продажби (число) и изчислява и извежда размера на търговската комисионна според горната таблица.
//  Резултатът да се изведе форматиран до 2 цифри след десетичната точка.
//  При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error".
function calculateCommission(grad, prodajbi) {

    if (prodajbi < 0) {
        console.log("error");
        return;
    }


    let commission = 0;

    switch (grad) {
        case "Sofia":
            if (prodajbi <= 500) {
                commission = prodajbi * 0.05;
            } else if (prodajbi <= 1000) {
                commission = prodajbi * 0.07;
            } else if (prodajbi <= 10000) {
                commission = prodajbi * 0.08;
            } else {
                commission = prodajbi * 0.12;
            }
            break;
        case "Varna":
            if (prodajbi <= 500) {
                commission = prodajbi * 0.045;
            } else if (prodajbi <= 1000) {
                commission = prodajbi * 0.075;
            } else if (prodajbi <= 10000) {
                commission = prodajbi * 0.10;
            } else {
                commission = prodajbi * 0.13;
            }
            break;
        case "Plovdiv":
            if (prodajbi <= 500) {
                commission = prodajbi * 0.055;
            } else if (prodajbi <= 1000) {
                commission = prodajbi * 0.08;
            } else if (prodajbi <= 10000) {
                commission = prodajbi * 0.12;
            } else {
                commission = prodajbi * 0.145;
            }
            break;
        default:
            console.log("error");
            return;
    }
    console.log(commission.toFixed(2));
}
calculateCommission("Sofia", 1500); 