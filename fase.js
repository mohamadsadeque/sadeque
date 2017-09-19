  createCanvas(420, 420);
}

function draw() {
  background(0);
  for(var i = 0; i < 21; i++){
   for(var j = 0; j <21; j++){
			if(blocos[j][i] == 1){
          rect(i*20,j*20 , 20, 20);
            }
         
	}
	if(keyIsDown(LEFT_ARROW) )
      x-=1/10;
  	if(keyIsDown(RIGHT_ARROW))
      x+=1/10;
  	if(keyIsDown(UP_ARROW))
      y-=1/10;
      if(keyIsDown(DOWN_ARROW))
      y+=1/10;
    
  	ellipse(x, y, 15, 15);
    
    
	}
 
  
}
