function tri(deposit, period, year){
let bla= year / 100
let sum= deposit + period * ((deposit*bla) / 12);
console.log(sum);

}
tri(200, 3, 5.7);