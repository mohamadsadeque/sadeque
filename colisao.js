var x = 150;
var y = 150;
var x_rec=100;
var y_rec = 100;
var rec_vel=3;
const tamanho_pacman=20
function setup(){
	createCanvas(300, 400);
}
function colisao(x,y,xr,yr){
  for(var i=0;i<=20;i++){
    var newx=(tamanho_pacman/2)*cos((i/10)*Math.PI)+x
    var newy=(tamanho_pacman/2)*sin((i/10)*Math.PI)+y
  	if(xr<=newx&& xr+20>=newx && yr<=newy && yr+20>=newy){
     console.log(true)
    }
    
   
  }
}

function draw(){
  	
	background(0);
  	if(keyIsDown(LEFT_ARROW))
      x-=3;
  	if(keyIsDown(RIGHT_ARROW))
      x+=3;
  	if(keyIsDown(UP_ARROW))
      y-=3;
      if(keyIsDown(DOWN_ARROW))
      y+=3;
  	rect(x_rec,y_rec, 20, 20);
  rect(0,0, 20, 20);
  	ellipse(x, y, tamanho_pacman, tamanho_pacman);
    fill(0, 60, 100);
	rect(0, 300, 300, 100);
  textSize(22);
  fill(50, 250, 0);
  text("Vidas: ", 10, 320);
  /*
  x_rec+=rec_vel;
  if(x_rec>=300){
   	rec_vel=-3;
  }
  else if(x_rec<=0){
   rec_vel = 3; 
  }
  
 textSize(22)
 fill(255, 255, 255);
 text(mouseX+ " "+ mouseY, mouseX+20, mouseY+20 )*/
  
  colisao(x,y,x_rec,y_rec)
} 
