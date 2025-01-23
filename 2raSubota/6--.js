// 6. Информация за скоростта

// Да се напише функция, която получава скорост (реално число) и отпечатва информация за скоростта.

// · При скорост до 10 (включително) отпечатайте "slow"

// · При скорост над 10 и до 50 (включително) отпечатайте "average"

// · При скорост над 50 и до 150 (включително) отпечатайте "fast"

// · При скорост над 150 и до 1000 (включително) отпечатайте "ultra fast"

// · При по-висока скорост отпечатайте "extremely fast
function speedInfo(number){

if (number <= 10){
    console.log("slow");
} else if (number > 10 & number <= 50){
    console.log("average");
} else if (number > 50 & number <= 150){
    console.log("fast");
} else if (number > 150 & number <= 1000){
    console.log("ultra fast");
} else if (number > 1000){
    console.log("extremely fast");
}

}
speedInfo(153214);