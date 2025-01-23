// сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

// ход

// От конзолата се четат 3 реда:

// 1. Депозирана сума – реално число в интервала [100.00 … 10000.00]

// 2. Срок на депозита (в месеци) – цяло число в интервала [1…12]

// 3. Годишен лихвен процент – реално число в интервала [0.00 …100.00]
// сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
// Изход

// Да се отпечата на конзолата сумата в края на срока.

// function tri(deposit, period, year){
//     let bla= year / 100
//     let sum= deposit + period * ((deposit*bla) / 12);
//     console.log(sum);
    

function totalMoney(depositSum, depositEndDate, yearProcent){

 let procent=yearProcent / 100;
 let sum=depositSum + depositEndDate * ((depositSum*procent)/12);
console.log(sum);

}
totalMoney(200, 3, 5.7);