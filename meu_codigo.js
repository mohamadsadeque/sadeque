var blocos = new Array();
blocos[0] =  [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1];
blocos[1] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
blocos[2] =  [1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[3] =  [1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1];
blocos[4] =  [1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[5] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
blocos[6] =  [1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[7] =  [1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[8] =  [1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[9] =  [1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[10] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
blocos[11] = [1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1];
blocos[12] = [1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1];
blocos[13] = [1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1];
blocos[14] = [1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1];
blocos[15] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1];
blocos[16] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1];
blocos[17] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1];
blocos[18] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1];
blocos[19] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
blocos[20] = [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1];

var x = 420;
var y = 420;
var monstroX = 420;
var monstroY = 420;



function setup() {
  createCanvas(840, 840);
}
/*function fase(nivel){
	switch (nivel)
{
   case 1: 
      
       break;
   default: 
       alert("Não tem essa fase");
       break;
}
	}*/


function monstros(){
	rect(monstroX, monstroY, 20, 20)
	monstroX += Math.random()
	}

	
function teleport(){
	 if(x > 815 ){				// TELEPORT
	   x = 20;
	   y = 420;}
	else if(x<15){
		x = 815;
		y = 420;
	}	
	 else if(y<15){
		 x = 420;
		 y = 815;
	}	
	  else if(y>815){
		x = 420;
	    y = 15;
	}	}
	

function colisao(x,y,xr,yr){
  for(var i=0;i<=40;i++){
    var newx=(28/2)*cos((i/10)*Math.PI)+x
    var newy=(28/2)*sin((i/10)*Math.PI)+y
  	if(xr<=newx&& xr+40>=newx && yr<=newy && yr+40>=newy){
     console.log(true)
    }
  }
}

function limite(nx,ny){
      for(var c = parseInt((nx-15)/40); c <= parseInt((nx+15)/40); c++ ){
      	for(var l = parseInt((ny-15)/40); l <= parseInt((ny+15)/40); l++ ){
            if(blocos[l][c]==1){
            	return true
            }
        }
      }
  	return false
}
function draw() {
  background(0);
  for(var i = 0; i < 21; i++){
   for(var j = 0; j <21; j++){
			if(blocos[j][i] == 1){
              	noStroke();
              	//fill(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)); //LOUCURA
          		rect(i*40,j*40 , 40, 40);
            }
	}
  }
	if(keyIsDown(LEFT_ARROW)&&!limite(x-3,y)){
		
      x-=3;
    }else if(keyIsDown(RIGHT_ARROW)&&!limite(x+3,y)){
      x+=3;
  	}else if(keyIsDown(UP_ARROW)&&!limite(x,y-3)){
      y-=3;
    }else if(keyIsDown(DOWN_ARROW)&&!limite(x,y+3)){
      y+=3;
    }
	teleport();
	
	
	noStroke();
  	ellipse(x, y, 38, 38);
  	

 
  
}
