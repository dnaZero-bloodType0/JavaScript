function shoping (petarBiudjet, broiVideokarti, broiProcesori, broiRam){

 let cenaVsichkiVideokarti = broiVideokarti * 250;

 let cenaBroiProcesor = cenaVsichkiVideokarti * 0.35;
 let cenaVsichkiProcesori = broiProcesori * cenaBroiProcesor;

 let cenaBroiRam = cenaVsichkiVideokarti * 0.1;
 let cenaVsichkiRam = broiRam * cenaBroiRam;

 let krainaCena = cenaVsichkiVideokarti + cenaVsichkiProcesori + cenaVsichkiRam;

 if (broiVideokarti > broiProcesori){
    let otstupka15 = krainaCena * 0.15;
    krainaCena = krainaCena - otstupka15;
 }
    if (petarBiudjet >= krainaCena) {
        cena = petarBiudjet - krainaCena;
        console.log(`You have ${cena.toFixed(2)} leva left!`);
        
    } else {
        let cenaa = krainaCena - petarBiudjet;
        console.log(`Not enough money! You need ${cenaa.toFixed(2)} leva more!`);
    }

}
shoping(900,

    2,
    
    1,
    
    3);