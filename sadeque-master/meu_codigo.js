var blocos = new Array();

blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
blocos[1] =  [1,3,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,3,1];
blocos[2] =  [1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1];
blocos[3] =  [1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1];
blocos[4] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
blocos[5] =  [1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1];
blocos[6] =  [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
blocos[7] =  [1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1];
blocos[8] =  [1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1];
blocos[9] =  [1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1];
blocos[10] = [1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1];
blocos[11] = [1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1];
blocos[12] = [1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1];
blocos[13] = [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
blocos[14] = [1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1];
blocos[15] = [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1];
blocos[16] = [1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1];
blocos[17] = [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1];
blocos[18] = [1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1];
blocos[19] = [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1];
blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var d = 1;
var v = 3;
var placar = 0;
var x = 420;
var y = 660;
var aleatorio;
var velx = [4,4,4,-4,0,4,4,4,-4,4];
var vely = [0,0,0,0,-4,4,0,4,0,0];
var monstroX = [420,80,500,80,540,540,700,700,700,420];
var monstroY = [420,80,80,540,540,540,80,700,700,420];
var parede;
var fantasma;
var menu = [];
var img_fase = [];
var coracao;
var temp = 0;
var tela = 0;
var contFrame = 0;
var tempo_menu = 0;

function preload() {
  for(i=0;i <=1;i++){
   menu[i] = loadImage("figura/menu/menu"+(i+1)+".png");
}
for(i=0;i <5;i++){
   img_fase[i] = loadImage("figura/fases/fase"+i+".png");
}
gameover = loadImage("figura/menu/gameover.png");


parede = loadImage("figura/parede.png");
fantasma= loadImage("figura/fantasma.png");
//coracao= loadImage("figuras/coracao.png");
}
function setup() {
  frameRate(30);
  createCanvas(1040, 840);
  rect(840,0,200,1040);
  
}

	function move(){
		if(keyIsDown(LEFT_ARROW)&&!limite(x-4,y)){
			x-=8;
    } if(keyIsDown(RIGHT_ARROW)&&!limite(x+4,y)){
			x+=8;
  	} if(keyIsDown(UP_ARROW)&&!limite(x,y-4)){
			y-=8;			
    } if(keyIsDown(DOWN_ARROW)&&!limite(x,y+4)){
			y+=8;
		}
		}
		
function fase(){
	  for(var i = 0; i < 21; i++){
   for(var j = 0; j <21; j++){
			if(blocos[j][i] == 1){
              	noStroke();
				  rect(i*40,j*40 , 40, 40);
				  image(parede,i*40,j*40);
						}
			else if(blocos[j][i] == 0) {
				ellipse(i*40+20,j*40+20,5,5);
			}
			else if(blocos[j][i] == 3) {
				ellipse(i*40+25,j*40+20,10,10);
			}
	}
  }
	  }
		
function monstro(numero_m, posx_m,posy_m){

	if(lim_monstro(posx_m+4,posy_m)){
		aleatorio = parseInt(Math.random()*6);	
		if(aleatorio == 0) {
		velx[numero_m] = -4
		vely[numero_m] = 0;
		}
	
		else if(aleatorio == 1 || aleatorio == 2 || aleatorio == 3) {
			monstroX[numero_m] += -4;
			velx[numero_m] = 0
			vely[numero_m] =4;
			
			}

		else if( aleatorio == 4 || aleatorio == 5 || aleatorio == 6 ) {
			monstroX[numero_m] += -4;
			velx[numero_m] = 0
			vely[numero_m] = -4;	
			}

		}
	else if(lim_monstro(posx_m-4,posy_m)) {
			aleatorio = parseInt(Math.random()*6);		
			if(aleatorio== 0) {
			velx[numero_m] = 4;
			vely[numero_m] = 0;
			}
			
			else if(aleatorio == 1 || aleatorio == 2 || aleatorio == 3) {
				monstroX[numero_m] += 4;
				velx[numero_m] = 0
				vely[numero_m] = 4;
				}
	
			
			else if ( aleatorio == 4 || aleatorio == 5 || aleatorio == 6) {
				monstroX[numero_m] += 4;
				velx[numero_m] = 0
				vely[numero_m] = -4;	
				}
	
			}
	else if(lim_monstro(posx_m,posy_m+4 )){
				aleatorio= parseInt(Math.random()*6);		
				if(aleatorio == 0) {
				monstroY[numero_m] += -4;
				velx[numero_m] = 4
				vely[numero_m] = 0;
				}
				
				else if(aleatorio == 1 || aleatorio == 2 || aleatorio == 3) {
					monstroY[numero_m] += -4;
					velx[numero_m] = -4
					vely[numero_m]= 0;
					}
				
				else if ( aleatorio == 4 || aleatorio == 5 || aleatorio == 6 ) {
					velx[numero_m] = 0
					vely[numero_m] = -4;	
					}		
				}
		else if(lim_monstro(posx_m,posy_m-4)){
					aleatorio = parseInt(Math.random()*6);		
					if(aleatorio == 0) {
					vely[numero_m] = 4
					velx[numero_m] = 0;
					}
					
					else if(aleatorio == 1 || aleatorio == 2 || aleatorio == 3) {
						monstroY[numero_m] +=4;
						velx[numero_m] = -4
						vely[numero_m] = 0;
							}
					
					else if(aleatorio == 4 || aleatorio == 5 || aleatorio == 6 ) {
						monstroY[numero_m] += 4;
						velx[numero_m] = 4
						vely[numero_m] = 0;	
						}
			}
	
		
	
	 monstroX[numero_m] += velx[numero_m];
	 monstroY[numero_m] += vely[numero_m];
	}
function teleport(){
	 if(x > 815 ){				// TELEPORT
	   x = 8;
	   y = 420;}

	else if(x<4){
		x = 816;
		y = 420;s
	}	

	 else if(y<4){
		 x = 420;
		 y = 816;
	}	

	  else if(y>815){
		x = 420;
	    y = 4;
	}	
}

function itens(nx,ny){
	for(var c = parseInt((nx)/40); c <= parseInt((nx)/40); c++ ){
		for(var l = parseInt((ny)/40); l <= parseInt((ny)/40); l++ ){
				// contagem de pontos
				
				if(blocos[l][c]==0){ 
					placar += 10;
					blocos[l][c] = 2; //espaço vazio
				}
				// Adicionar Vida
				if(blocos[l][c]==3){	
					v++
					blocos[l][c] = 2; //espaço vazio
				}				
		}
	}
}
function Info(){ 	
	//vidas
textSize(22);
text("Vidas: ", 850, 20);
	for(p = 0; p < v; p++ ){
		//image(coracao, p*20 + 850,25);
		fill(255);
		ellipse(p*20+850, 30, 20, 20)
		}
	//Pontos
textSize(22);
text("Pontos: ", 850, 60);
text(placar, 850, 80);		
	// Dificuldade
	textSize(22);
text("Dificuldade: ", 850, 100);
	for(p = 0; p < d; p++ ){
		rect(p*11 + 850, 120, 10, 10);
		}
		}

function colisao(player_x,player_y,monstro_x,monstro_y){
      if(dist(player_x,player_y,monstro_x,monstro_y)<40){
		  v--;
		  x = 420;
		  y = 660;
		  }
	return false
}	

function limite(nx,ny){
      for(var c = parseInt((nx-18)/40); c <= parseInt((nx+18)/40); c++ ){
      	for(var l = parseInt((ny-18)/40); l <= parseInt((ny+18)/40); l++ ){
            if(blocos[l][c]==1){
            	return true
            }
        }
      }
  	return false
}

function lim_monstro(nx,ny){
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
// MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU 
// MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU 
 if(tela == 0){ 
  anima = menu[contFrame];
  image( anima, 0, 0);
  tempo_menu++
  if(tempo_menu > 15){
  contFrame++;
}
  if ( contFrame > 1) {
     contFrame = 0; 
     tempo_menu = 0 
  }
for(i=0;i<5;i++){
	image(img_fase[i],(i*100)+150, 520);

}
if(mouseIsPressed && (mouseX >= 150 && mouseX <= 230) && (mouseY >= 520 && mouseY <= 600) )	 {
	tela = 1;
	} 
if(mouseIsPressed && (mouseX >= 250 && mouseX <= 330) && (mouseY >= 520 && mouseY <= 600) )	 {
	blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		blocos[1] =  [1,3,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,3,1];
		blocos[2] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[3] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[4] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[5] =  [1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1];
		blocos[6] =  [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		blocos[7] =  [1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1];
		blocos[8] =  [1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1];
		blocos[9] =  [1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1];
		blocos[10] = [1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1];
		blocos[11] = [1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1];
		blocos[12] = [1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1];
		blocos[13] = [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		blocos[14] = [1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1];
		blocos[15] = [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1];
		blocos[16] = [1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1];
		blocos[17] = [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1];
		blocos[18] = [1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1];
		blocos[19] = [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1];
		blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		d = 1;
	   v = 3;
	   placar = 0;
       x = 420;
       y = 660;
       velx = [4,4,4,-4,0,4,4,4,-4,4];
	   vely = [0,0,0,0,-4,4,0,4,0,0];
	   monstroX = [420,80,500,80,540,540,700,700,700,420];
       monstroY = [420,80,80,540,540,540,80,700,700,420];
	tela = 2;
	}
if(mouseIsPressed && (mouseX >= 350 && mouseX <= 430) && (mouseY >= 520 && mouseY <= 600) )	 {
	tela = 3 ;
	}
if(mouseIsPressed && (mouseX >= 450 && mouseX <= 530) && (mouseY >= 520 && mouseY <= 600) )	 {
	tela = 4 ;
	}
if(mouseIsPressed && (mouseX >= 550 && mouseX <= 630) && (mouseY >= 520 && mouseY <= 600) )	 {
	tela = 5 ;
	}

  
 }

// Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1
// Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1

 else if(tela == 1){
  background(0);
  d = tela;
	fase();
	move();
	itens(x,y);
	teleport();
	noStroke();
  	ellipse(x, y, 40, 40);
	Info();
	 for(i=0;i<10;i++){
		monstro(i, monstroX[i],monstroY[i]); 
		image(fantasma,monstroX[i]-15, monstroY[i]-15)
		colisao(x,y,monstroX[i],monstroY[i]);
	  }
	  if(placar >= 500){
		blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		blocos[1] =  [1,3,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,3,1];
		blocos[2] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[3] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[4] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[5] =  [1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1];
		blocos[6] =  [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		blocos[7] =  [1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1];
		blocos[8] =  [1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1];
		blocos[9] =  [1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1];
		blocos[10] = [1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1];
		blocos[11] = [1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1];
		blocos[12] = [1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1];
		blocos[13] = [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		blocos[14] = [1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1];
		blocos[15] = [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1];
		blocos[16] = [1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1];
		blocos[17] = [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1];
		blocos[18] = [1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1];
		blocos[19] = [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1];
		blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		d = 1;
	   v = 3;
	   placar = 0;
       x = 420;
       y = 660;
       velx = [4,4,4,-4,0,4,4,4,-4,4];
	   vely = [0,0,0,0,-4,4,0,4,0,0];
	   monstroX = [420,80,500,80,540,540,700,700,700,420];
       monstroY = [420,80,80,540,540,540,80,700,700,420];
		tela = 2;	
		 
		  }
	if(v == 0){
		tela = 6
		}	  
		  
	}
	
else if(tela = 2){
	
	background(0);
	d = tela;
	fase();
	move();
	itens(x,y);
	teleport();
	noStroke();
  	ellipse(x, y, 40, 40);
	Info();
	for(i=0;i<10;i++){
		monstro(i, monstroX[i],monstroY[i]); 
		image(fantasma,monstroX[i]-15, monstroY[i]-15)
		colisao(x,y,monstroX[i],monstroY[i]);
	  }
	  
	  if(placar >= 500){
		
		 
		  }
	if(v == 0){
		tela = 6
		}	  
		
	
	}

// GAME OVER GAME OVER GAME OVER GAME OVER GAME OVER GAME OVER GAME OVER	
// GAME OVER GAME OVER GAME OVER GAME OVER GAME OVER GAME OVER GAME OVER	

else if(tela == 6){
	 background(255);
	 image(gameover,0,0);
	 if (keyIsDown(ENTER) ) {
       d = 1;
	   v = 3;
	   placar = 0;
       x = 420;
       y = 660;
       velx = [4,4,4,-4,0,4,4,4,-4,4];
	   vely = [0,0,0,0,-4,4,0,4,0,0];
	   monstroX = [420,80,500,80,540,540,700,700,700,420];
       monstroY = [420,80,80,540,540,540,80,700,700,420];
	   tela = 0; 
    } 
	 
	}
	
// PARABÉNS, VOCÊ COMPLETOU O JOGO	
// PARABÉNS, VOCÊ COMPLETOU O JOGO	

else if(tela == 7){
	background(255);
	 image(zerou,0,0);
	}
	
  	}
