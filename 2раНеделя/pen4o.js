function sukrovishte (number){


 if (number > 3 || number <= 0) {
    console.log("Invalid choice. Please select Door 1, 2, or 3.");
    }

 if (number === 2) {
    console.log("Congratulations, Pen4o! You found the treasure behind Door 2");
   }  
 else if (number === 1 || number === 3){
    console.log("A bucket of cold water splashes on you! Unlucky Pen4o!")
 }
 

}
sukrovishte(1);