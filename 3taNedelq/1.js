function zadacha1 (type, rows, cols){

let ticketCount = rows * cols;
let income = 0;
if (type === "Premiere"){
    income = ticketCount* 12;

}else if(type === "Normal") {
    income = ticketCount * 7.5;

} else if (type === "Discount"){ 
income = ticketCount * 5;
}
console.log(` ${income.toFixed(2)} leva.`);


}
zadacha1("Premiere",10,12)