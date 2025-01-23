// 5. Число от 100 до 200

// Да се напише функция, която получава цяло число и проверява дали е под 100, между 100 и 200 или над 200. Ако числото е:

// · под 100 отпечатайте: "Less than 100"

// · между 100 и 200 отпечатайте: "Between 100 and 200"

// · над 200 отпечатайте: "Greater than 200"
function otDo(number){

if (number < 100){
    console.log("Less than 100");
    
} else if (number >= 100 & number <= 200){
    console.log("Between 100 and 200");
  
} else if (number > 200){
    console.log("Greater than 200");
}
}
otDo(109);