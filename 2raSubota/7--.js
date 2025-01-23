// 7. Лица на фигури

// Да се напише функция, която получава като вида и размерите на геометрична фигура и пресмята лицето й. Фигурите са четири вида: квадрат (square),
//  правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). На първия ред на входа се чете вида на фигурата (текст със следните възможности: 
//     square, rectangle, circle или triangle).

// · Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му

// · Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му

// · Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга

// · Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея

// Резултатът да се закръгли до 3 цифри след десетичната запетая.

function licaNaFiguri (vid, a, b){

    let type = vid;

    if (type === "square"){
        let stranaA = a;
        squareFace = stranaA * stranaA;
        console.log(squareFace.toFixed(3));
        
    } else if(type === "rectangle"){
        let stranaA = a;
        let stranaB = b;
        rectangleFace = stranaA * stranaB;
        console.log(rectangleFace.toFixed(3));
    
    } else if (type === "circle") {
        let stranaA = a;
        circleFace = Math.PI * Math.pow(stranaA, 2);
        console.log(circleFace.toFixed(3));

    } else if (type === "triangle") {
        let stranaA = a;
        let stranaB = b;
        triangleFace = stranaA * stranaB / 2;
        console.log(triangleFace.toFixed(3));
    }
   

}
licaNaFiguri("triangle", 4.5, 20);