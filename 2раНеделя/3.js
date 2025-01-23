// 3. Време + 15 минути

// Да се напише функция, която получава час и минути от 24-часово денонощие и изчислява колко ще е часът след 15 минути.
//  Резултатът да се отпечата във формат часове:минути. Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. 
//  Часовете се изписват с една или две цифри. Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо.
function timeAndMinute(num1, num2){

let vsichkiMin = num1 * 60 + num2;
let dobaveniMin = vsichkiMin + 15;
let chas = Math.floor(dobaveniMin / 60);
let min = dobaveniMin % 60;

  if (chas === 24) {
    chas = 0;
  } 
    if ( min < 10){
        console.log(`${chas}:0${min}`);
    } else {
        console.log(`${chas}:${min}`);
    }

}
timeAndMinute(1,46);