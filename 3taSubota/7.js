// Да се напише функция, която получава час от денонощието(цяло число) и ден от седмицата(текст) и проверява дали офисът на фирма е отворен
// , като работното време на офисът е от 10-18 часа, от понеделник до събота включително.
function zadacha7(chas, den) {

    switch (den) {
        case "Monday": if (chas >= 10 && chas < 18) {
            console.log("open"); break;
        }
        case "Tuesday": if (chas >= 10 && chas < 18) {
            console.log("open"); break;
        }
        case "Wednesday": if (chas >= 10 && chas < 18) {
            console.log("open"); break;
        }
        case "Thursday": if (chas >= 10 && chas < 18) {
            console.log("open"); break;
        }
        case "Friday": if (chas >= 10 && chas < 18) {
            console.log("open"); break;
        }
        case "Saturday": if (chas >= 10 && chas < 18) {
            console.log("open"); break;
        }
        default:
            console.log("closed"); break;
    }


}
zadacha7(15, "Friday");