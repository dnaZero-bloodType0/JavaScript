// Да се напише функция, която получава възраст (реално число) и пол ('m' или 'f'), въведени от потребителя, и отпечатва обръщение измежду следните:

// · "Mr." – мъж (пол 'm') на 16 или повече години

// · "Master" – момче (пол 'm') под 16 години

// · "Ms." – жена (пол 'f') на 16 или повече години

// · "Miss" – момиче (пол 'f') под 16 години
function ageAndSex(num,sex){

if (num >= 16 && sex === "m") {
    console.log("Mr.");
    
} else if (num >= 16 && sex === "f") {
    console.log("Ms.");
} else if (num < 16 && sex === "m") {
    console.log("Master");
} else if (num < 16 && sex === "f") {
 console.log("Miss");
    }
}



ageAndSex(17,"m");