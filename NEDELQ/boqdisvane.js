// Румен иска да пребоядиса хола и за целта е наел майстори. Напишете програма, която изчислява разходите за ремонта, предвид следните цени:

// · Предпазен найлон - 1.50 лв. за кв. метър

// · Боя - 14.50 лв. за литър

// · Разредител за боя - 5.00 лв. за литър

// За всеки случай, към необходимите материали, Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон, разбира се и 0.40 лв. за торбички.
//  Сумата, която се заплаща на майсторите за 1 час работа, е равна на 30% от сбора на всички разходи за материали.

// Вход

// Входът се чете от конзолата и съдържа точно 4 реда:

// 1. Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]

// 2. Необходимо количество боя (в литри) - цяло число в интервала [1…100]

// 3. Количество разредител (в литри) - цяло число в интервала [1…30]

// 4. Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]

// Изход

// Да се отпечата на конзолата един ред:

// · "{сумата на всички разходи}"
function zadacha6 (neobhodimNailon, neobhodimaBoq, kolichestvoRazreditel, chasoveZaRabota){

    let pariNailon = 1.50 * (neobhodimNailon + 2);
    let pariBoq = 14.50 * (neobhodimaBoq + (neobhodimaBoq * 0.1) );
    let pariRazreditel = 5.00 * kolichestvoRazreditel;
    let sumaZaVsichkiRazhodi = pariNailon +pariBoq+pariRazreditel + 0.40;
    let maistoriChas = sumaZaVsichkiRazhodi * 0.3
    let vsichkiPariMaistori = chasoveZaRabota * maistoriChas;
    let cqlataSuma = sumaZaVsichkiRazhodi + vsichkiPariMaistori;

console.log(cqlataSuma);

}
zadacha6(10,11,4,8);