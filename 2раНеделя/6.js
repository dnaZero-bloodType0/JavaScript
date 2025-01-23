function worldRecordSwim (recordSec, raztoqnieMetri, secZaMetur){

let allSecondsForTerrain = raztoqnieMetri * secZaMetur;

let howTimes = raztoqnieMetri / 15;
let waterBooring = Math.floor(howTimes) * 12.5;

 let finalSeconds = allSecondsForTerrain + waterBooring;
 let differenceWithWorldRecord = Math.abs(finalSeconds - recordSec);
 
 if (finalSeconds < recordSec) {
    console.log(`Yes, he succeeded! The new world record is ${finalSeconds.toFixed(2)} seconds.`);
    
 } else {
    console.log(`No, he failed! He was ${differenceWithWorldRecord.toFixed(2)} seconds slower.`);
 }

}
worldRecordSwim (10464,

    1500,
    
    20);