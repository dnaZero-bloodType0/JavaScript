function kidStore(cenaEkskurziq, broiPuzeli, broiKukli, broiMecheta, broiMinioni, broiKamioncheta) {
    
    let obshtaSuma = broiPuzeli * 2.60 + broiKukli * 3 + broiMecheta * 4.10 + broiMinioni * 8.20 + broiKamioncheta * 2;
    let broiIgrachki = broiPuzeli + broiKukli + broiMecheta + broiMinioni + broiKamioncheta;

    if (broiIgrachki >= 50) {
        obshtaSuma *= 0.75; 
    }


    obshtaSuma *= 0.9;

    if (obshtaSuma >= cenaEkskurziq) {
        let ostavashtiPari = obshtaSuma - cenaEkskurziq;
        console.log(`Yes! ${ostavashtiPari.toFixed(2)} lv left.`);
    } else {
        let nedostigashtiPari = cenaEkskurziq - obshtaSuma;
        console.log(`Not enough money! ${nedostigashtiPari.toFixed(2)} lv needed.`);
    }
}

kidStore(40.8, 20, 25, 30, 50, 10);