function greenExersize(kMeters){

    let priceForMeter = 7.61;
    let cqlaCena = priceForMeter * kMeters;
    let namalenie = 18 / 100;
    let cqloNamalenie = namalenie * cqlaCena;
    let poslednaCena=cqlaCena - cqloNamalenie; 
console.log(`The final price is: ${poslednaCena} lv.`);
console.log(`The discount is: ${cqloNamalenie} lv.`);

}
greenExersize(550);