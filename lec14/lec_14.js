console.log('Element Color Changing....');

// Write your tag here. 
let tag='h1';
var victim = document.querySelectorAll(tag);

// Array Of Colors
var colors = [];
while (colors.length < 100) {

    do {
        var color = Math.floor((Math.random()*1000000)+1);
    } while (colors.indexOf(color) >= 0);

    colors.push("#" + ("000000" + color.toString(16)).slice(-6));

}

var index = 0; // Will keep track of which color to use
let lengthOfElements=victim.length;
console.log(lengthOfElements);

console.log('The Color Length is: '+colors.length)
console.log('The Elements Length is: '+lengthOfElements)


let current;  // the current Color
function change() {
  // If we have run out of colors, stop the timer
  if(index >= colors.length){ index=0 }
  
  // Set the color and increment the index
    current=colors[index++];

    for(let loop=0; loop<lengthOfElements; loop++){
    victim[loop].style.color=current;
    }

}

// Start the timer but get a reference to it 
// so we can stop it later
var timer = setInterval(change, 200); 

// for stoping this script
// clearInterval(timer);
