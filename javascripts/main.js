var pixels = 0;

if(pixels > 0){
    pixels = Math.round(pixels * 100)/100;
} else {
    pixels = 0
}


function pixelClick(number){
    pixels = pixels + number;
    document.getElementById("pixels").innerHTML = pixels;
}

var Doodlers = 0;

function buyDoodler(){
    var DoodlerCost = Math.floor(10 * Math.pow(1.1,Doodlers)); //works out the cost of this Doodler
    if(pixels >= DoodlerCost){ //checks that the player can afford the Doodler
        Doodlers = Doodlers + 1; //increases number of Doodlers
     pixels = pixels - DoodlerCost; //removes the pixels spent
        document.getElementById('Doodlers').innerHTML = Doodlers; //updates the number of Doodlers for the user
        document.getElementById('pixels').innerHTML = pixels; //updates the number of pixels for the user
    }
    
    var nextCostDoodler = Math.floor(10 * Math.pow(1.1,Doodlers)); //works out the cost of the next Doodler
    document.getElementById('DoodlerCost').innerHTML = nextCostDoodler; //updates the Doodler cost for the user
}

var Dabblers = 0;

function buyDabbler(){
  var DabblerCost = Math.floor(10* Math.pow(1.1,Dabblers));
  if(pixels >= DabblerCost){
    Dabblers = Dabblers + 1;
    pixels = pixels - DabblerCost;
        document.getElementById('Dabblers').innerHTML = Dabblers
        document.getElementById('pixels').innerHTML = pixels;
    }
    var nextCostDabbler = Math.floor(10 * Math.pow(1.1,Dabblers));
    document.getElementById('DabblerCost').innerHTML = nextCostDabbler;
}

function PPS(){
PixelsPerSecond = (Doodlers*0.1)+(Dabblers*0.3);	//figures out how much pixels are being made per second
PixelsPerSecond = +PixelsPerSecond.toFixed(2);
document.getElementById('PixelsPerSecond').innerHTML = PixelsPerSecond;
}

window.setInterval(function(){

pixelClick(Doodlers*0.1);
pixelClick(Dabblers*0.3);

}, 1000);

window.setInterval(function(){

PPS();

}, 0);
