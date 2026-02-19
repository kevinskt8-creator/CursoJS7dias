// if, else if, else

let driverSpeed = 110;

if (driverSpeed > 110) {
  console.log("Driving too fast");
} else if (driverSpeed > 40 && driverSpeed <= 110) {
  console.log("OK");
} else console.log("Driving too slow");

// Switch , Case

let airport = 'SEA'

switch (airport) {
    case 'MCO' :
        console.log('Orlando')
        break
    case 'JFK' :
        console.log('Jonh F. Kennedy')
         break
    case 'SEA' :
        console.log('Seatle')  
         break 
    default:
        console.log('Unknown')
}