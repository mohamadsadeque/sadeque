var blocos = new Array();
blocos[0] =  [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1];
blocos[1] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
blocos[2] =  [1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[3] =  [1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1];
blocos[4] =  [1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[5] =  [1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[6] =  [1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[7] =  [1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[8] =  [1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[9] =  [1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[10] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
blocos[11] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[12] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[13] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[14] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[15] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[16] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[17] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[18] = [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1];
blocos[19] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
blocos[20] = [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1];

var x = 210;
var y = 210;
function setup() {
  createCanvas(420, 420);
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

function colisao(x,y,xr,yr){
  for(var i=0;i<=20;i++){
    var newx=(14/2)*cos((i/10)*Math.PI)+x
    var newy=(14/2)*sin((i/10)*Math.PI)+y
  	if(xr<=newx&& xr+20>=newx && yr<=newy && yr+20>=newy){
     console.log(true)
    }
  }
}

function limite(nx,ny){
      for(var c = parseInt((nx-8)/20); c <= parseInt((nx+8)/20); c++ ){
      	for(var l = parseInt((ny-8)/20); l <= parseInt((ny+8)/20); l++ ){
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
              	fill(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)); //LOUCURA
          		rect(i*20,j*20 , 20, 20);
            }
	}
  }
	if(keyIsDown(LEFT_ARROW)&&!limite(x-2,y)){
      x-=2;
    }else if(keyIsDown(RIGHT_ARROW)&&!limite(x+2,y)){
      x+=2;
  	}else if(keyIsDown(UP_ARROW)&&!limite(x,y-2)){
      y-=2;
    }else if(keyIsDown(DOWN_ARROW)&&!limite(x,y+2)){
      y+=2;
    }
	noStroke();
  	ellipse(x, y, 14, 14);

 
  
}
