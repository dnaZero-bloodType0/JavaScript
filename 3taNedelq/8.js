function examArrival(examHour, examMinute, arrivalHour, arrivalMinute) {
    
    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;

  
    let timeDifference = arrivalTime - examTime;

    if (timeDifference > 0) {
     
        console.log("Late");

        if (timeDifference < 60) {
            console.log(`${timeDifference} minutes after the start`);
        } else {
            let hours = Math.floor(timeDifference / 60);
            let minutes = timeDifference % 60;
            console.log(`${hours}:${minutes < 10 ? "0" + minutes : minutes} hours after the start`);
        }
    } else if (timeDifference >= -30) {
    
        console.log("On time");

        if (timeDifference !== 0) {
            console.log(`${Math.abs(timeDifference)} minutes before the start`);
        }
    } else {
    
        console.log("Early");

        let earlyDifference = Math.abs(timeDifference);
        if (earlyDifference < 60) {
            console.log(`${earlyDifference} minutes before the start`);
        } else {
            let hours = Math.floor(earlyDifference / 60);
            let minutes = earlyDifference % 60;
            console.log(`${hours}:"0"${minutes} hours before the start`);
        }
    }
}