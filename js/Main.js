
  
  var canvas, canvasContext;
  
  window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
 
    loadImages();   
 
      
  }




function loadingDoneSoStartGame() {
	var framesPerSecond = 30;

	setInterval(function() {
        moveEverything();
        drawEverything();
      }, 1000/framesPerSecond);
      carInit();
     initInput();
}


  
  
  
  function moveEverything() {
    carMove();
  }
    

   
  
  
  function drawEverything() {

    drawTracks();
    
    carDraw();
  }




