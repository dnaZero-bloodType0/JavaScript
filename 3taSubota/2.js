function weekendOrWorkingDay(day) {
   switch (day) {
    case "monday":console.log("Working day"); break;
    case "tuesday":console.log("Working day"); break;
    case "wednesday": console.log("Working day"); break;
    case "thursday": console.log("Working day"); break;
    case "friday": console.log("Working day"); break;
    case "saturday": console.log("Weekend"); break;
    case "sunday": console.log("Weekend"); break;
   default: console.log("Error"); break;
   }
}
weekendOrWorkingDay("monday");