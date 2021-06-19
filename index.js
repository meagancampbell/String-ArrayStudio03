let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food.split().sort();
equipment.split(' ').sort();
pets.split(' ').sort();
sleepAids.split(' ').sort();
//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
cargoHold = [food, equipment, pets, sleepAids];
console.log(cargoHold);


//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
input.question( 'Please select a cabinet (0 - 3) in the cargoHold \n');


//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
console.log(`You selected ${cargoHold[3]}`);


//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
