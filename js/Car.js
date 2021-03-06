  // variables to keep track of car position
  var carSpeed = 0;
  var carSpeedX = 0, carSpeedY = 0;
  const DRIVE_POWER = 0.5;
  const REVERSE_POWER = 0.2;
  const TURN_RATE = 0.03;
  const GROUNDSPEED_DECAY_MULT = 0.94;
  const MIN_TURN_SPEED = 0.5;
  var carAng = (-0.5*Math.PI);
  var carX = 0;
  var carY = 0;
  var carPic=document.createElement("img");
  


function carInit() {
	
	carReset();
}

////////////////////////////////////////////

 function carReset() {
    for(var i=0; i<trackGrid.length; i++) {
      if(trackGrid[i] == TRACK_PLAYER) {
        var tileRow = Math.floor(i/TRACK_COLS);
        var tileCol = i%TRACK_COLS;      
        carX = tileCol * TRACK_W + 0.5*TRACK_W;
        carY = tileRow * TRACK_H + 0.5*TRACK_H; 
        trackGrid[i] = TRACK_ROAD;
        break;
      }
    }
  }

///////////////////////////////////////////////////

function carMove() {
    if(keyHeld_Gas) {
      carSpeed += DRIVE_POWER;
    }
    if(keyHeld_Reverse) {
      carSpeed -= REVERSE_POWER;
    }
    if(Math.abs(carSpeed) >= MIN_TURN_SPEED) {

      if(keyHeld_TurnLeft) {
        carAng += -TURN_RATE*Math.PI;
      }
      if(keyHeld_TurnRight) {
        carAng += TURN_RATE*Math.PI;
      }
    }
    

    var nextX = carX + Math.cos(carAng) * carSpeed;
    var nextY = carY + Math.sin(carAng) * carSpeed;

    if(checkForTrackAtPixelCoord(nextX, nextY)){
      carX = nextX;
      carY = nextY;
    } else {
      carSpeed = 0.0;
    }

    carSpeed *= GROUNDSPEED_DECAY_MULT;
}


//////////////////////////////////////////


function carDraw() {
	
	drawBitmapCenteredAtLocationWithRotation(carPic, carX, carY, carAng);
	
}