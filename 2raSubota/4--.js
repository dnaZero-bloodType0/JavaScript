// 4. Познай паролата

// Да се напише функция, която получава парола (текст) и проверява дали дадената паролата съвпада с фразата "s3cr3t!P@ssw0rd".
//  При съвпадение да се изведе "Welcome". При несъвпадение да се изведе "Wrong password!".
function guessPassword(text){
    if (text === "s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    }  else {
        console.log("Wrong password!");
    }
}
guessPassword("qwerty");