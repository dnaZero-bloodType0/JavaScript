function obednaPochivka (imeSerial, vremeEpizod, vremePochivka){

    let vremeZaObqd = vremePochivka * 1/8;
    let vremeZaOtdih = vremePochivka * 1/4;
    let obshtoMoeVreme = vremeZaObqd + vremeZaOtdih;
    let ostavashtoVreme = vremePochivka - obshtoMoeVreme;

    if (ostavashtoVreme >= vremeEpizod){
        let ostavashto = ostavashtoVreme - vremeEpizod;
        console.log(`You have enough time to watch ${imeSerial} and left with ${Math.ceil(ostavashto)} minutes free time.`);
        
    }  else {
        let nujnoVreme = vremeEpizod - ostavashtoVreme;
        console.log(`You don't have enough time to watch ${imeSerial}, you need ${Math.ceil(nujnoVreme)} more minutes.`)
    }

}
obednaPochivka("Game of Thrones",

60,

96);