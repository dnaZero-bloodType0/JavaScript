// Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50).
//  Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им време във формат
//  "минути:секунди". Секундите да се изведат с водеща нула (2 à "02", 7 à "07", 35 à "35").
function sport (num1, num2 ,num3){

  
    let obshtoVreme = num1 + num2 + num3;
    let minuti = Math.floor(obshtoVreme / 60);
    let secundi = obshtoVreme % 60;

    if (secundi < 10){
        console.log(`${minuti}:0${secundi}`);
        
    } else {
        console.log(`${minuti}:${secundi}`);
    }

}
sport(35,45,44); 