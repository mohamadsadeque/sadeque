    
var blocos = new Array();
var d = 1;
var v = 3;
var placar = 0;
var x = 400;
var y = 640;
var aleatorio;
var velx = [4,4,0,-4,0,4,4,4,-4,4];
var vely = [0,0,-4,0,-4,0,0,4,0,0];
var monstroX = [420,80,500,80,540,540,700,700,700,420];
var monstroY = [420,80,80,540,540,540,80,700,700,420];
var parede;
var fantasma = [];
var gameover = [];
var menu = [];
var img_fase = [];
var coracao;
var temp = 0;
var tela = 0;
var contFrame = 0;
var contFrame2 = 0;
var tempo_fantasma = 0;
var tempo_menu = 0;
var tempo_game = 0;
var pac_sentido = 1;
var pac_cima=[];
var pac_baixo=[];
var pac_direita=[];
var pac_esquerda=[];
var zerou;

function preload() {

for(i=0;i <=1;i++){
   pac_cima[i] = loadImage("figura/pac/cima"+(i+1)+".png");
}
for(i=0;i <=1;i++){
   pac_baixo[i] = loadImage("figura/pac/baixo"+(i+1)+".png");
}
for(i=0;i <=1;i++){
   pac_direita[i] = loadImage("figura/pac/direita"+(i+1)+".png");
}
for(i=0;i <=1;i++){
   pac_esquerda[i] = loadImage("figura/pac/esquerda"+(i+1)+".png");
}

 for(i=0;i <=1;i++){
   menu[i] = loadImage("figura/menu/menu"+(i+1)+".png");
}

for(i=0;i <=1;i++){
   gameover[i] =  loadImage("figura/menu/gameover"+(i+1)+".png");
}
for(i=0;i <5;i++){
   img_fase[i] = loadImage("figura/fases/fase"+i+".png");
}
for(i=0;i < 7;i++){
   fantasma[i] = loadImage("figura/fantasma/fantasma"+i+".png");
}
zerou = loadImage("figura/zerou.png");
parede = loadImage("figura/parede.png");

}
function setup() {
  frameRate(15);
  createCanvas(1040, 840);
  rect(840,0,200,1040);
}



function pac_man(pac_sentido){
	if(pac_sentido === 2){
  pac= pac_direita[contFrame];
  image( pac, x-20, y-20);

  if(tempo_game> 2){
  contFrame++;
  tempo_game = 0 
}
  if ( contFrame > 1) {
     contFrame = 0; 

  }  
   tempo_game++
		}
	else if(pac_sentido === 1){
  pac = pac_esquerda[contFrame];
  image( pac, x-20, y-20);
  tempo_game++
   if(tempo_game> 2){
  contFrame++;
  tempo_game = 0 
}
  if ( contFrame > 1 ) {
     contFrame = 0; 
  } 
   
		}
	else if(pac_sentido === 3){
  pac= pac_cima[contFrame];
  image( pac, x-20, y-20);
 
   if(tempo_game> 2){
  contFrame++;
  tempo_game = 0 
}
  if ( contFrame > 1) {
     contFrame = 0; 
     tempo_menu = 0 
  }  
  tempo_game++
		}
	else if(pac_sentido === 4){
  pac= pac_baixo[contFrame];
  image( pac, x-20, y-20);
  tempo_game++
   if(tempo_game> 2){
  contFrame++;
  tempo_game = 0 
}
  if ( contFrame > 1) {
     contFrame = 0; 
     tempo_menu = 0 
  } 
		}
	}
function move(){
		if(keyIsDown(LEFT_ARROW)&&!limite(x-4,y)){
			x-=8;
			pac_sentido = 1
    } if(keyIsDown(RIGHT_ARROW)&&!limite(x+4,y)){
			x+=8;
			pac_sentido = 2
  	} if(keyIsDown(UP_ARROW)&&!limite(x,y-4)){
			y-=8;	
			pac_sentido = 3	
    } if(keyIsDown(DOWN_ARROW)&&!limite(x,y+4)){
			y+=8;
			pac_sentido = 4
		}
		}


		
function fase(){
	  for(var i = 0; i < 21; i++){
   for(var j = 0; j <21; j++){
			if(blocos[j][i] == 1){
              	noStroke();
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
		
function monstro(numero_m,posx_m,posy_m){

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

function colisao(return_x,return_y,player_x,player_y,monstro_x,monstro_y){
      if(dist(player_x,player_y,monstro_x,monstro_y)<40){
		  v-- ;
		  x = return_x;
		  y = return_y;
		  
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
  if(tempo_menu > 5){
  contFrame++;
  tempo_menu = 0 
}
  if ( contFrame > 1) {
     contFrame = 0; 
     
  }
for(i=0;i<5;i++){
	image(img_fase[i],(i*100)+150, 520);

}
if(mouseIsPressed && (mouseX >= 150 && mouseX <= 230) && (mouseY >= 520 && mouseY <= 600) )	 {
blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  // FASE 1 FASE 1 FASE 1 FASE 1 FASE 1 FASE 1 FASE 1
blocos[1] =  [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1];  // FASE 1 FASE 1 FASE 1 FASE 1 FASE 1 FASE 1 FASE 1
blocos[2] =  [1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1];// FASE 1 FASE 1 FASE 1 FASE 1 FASE 1 FASE 1 FASE 1
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
		d = 1;
	   placar = 0;
       x = 420;
       y = 660;
       velx = [4,4,4,4,0,4,4,4,-4,4];
	   vely = [0,0,0,0,-4,4,0,4,0,0];
	   monstroX = [420,80,500,80,540,540,700,700,700,420];
       monstroY = [460,80,80,540,540,540,80,700,700,460];
	tela = 1;
	} 
if(mouseIsPressed && (mouseX >= 250 && mouseX <= 330) && (mouseY >= 520 && mouseY <= 600) )	 {
		blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // FASE 2 FASE 2 FASE 2 FASE 2 FASE 2 FASE 2 FASE 2
		blocos[1] =  [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1];// FASE 2 FASE 2 FASE 2 FASE 2 FASE 2 FASE 2 FASE 2
		blocos[2] =  [1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1];
		blocos[3] =  [1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1];
		blocos[4] =  [1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1];
		blocos[5] =  [1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1];
		blocos[6] =  [1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1];
		blocos[7] =  [1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1];
		blocos[8] =  [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1];
		blocos[9] =  [1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1];
		blocos[10] = [1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1];
		blocos[11] = [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1];
		blocos[12] = [1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1];
		blocos[13] = [1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1];
		blocos[14] = [1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1];
		blocos[15] = [1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1];
		blocos[16] = [1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1];
		blocos[17] = [1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1];
		blocos[18] = [1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1];
		blocos[19] = [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1];
		blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		d = 1;
	   placar = 0;
       x = 420;
       y = 660;
       velx = [4,0,-4,-4,-4,4,4,4,-4,4,4];
	   vely = [0,-4,0,0,0,0,0,0,0,0,0];
	   monstroX = [80,80,780,780,160,340,700,160,700,160,580];
       monstroY = [80,580,80,580,160,160,160,360,360,700,700];
	tela = 2;
	}
if(mouseIsPressed && (mouseX >= 350 && mouseX <= 430) && (mouseY >= 520 && mouseY <= 600) )	 {
		blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];// FASE 3 FASE 3 FASE 3 FASE 3 FASE 3 FASE 3 FASE 3 FASE 3
		blocos[1] =  [1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1];// FASE 3 FASE 3 FASE 3 FASE 3 FASE 3 FASE 3 FASE 3 FASE 3
		blocos[2] =  [1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1];
		blocos[3] =  [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[4] =  [1,0,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,0,1];
		blocos[5] =  [1,0,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,0,1];
		blocos[6] =  [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		blocos[7] =  [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		blocos[8] =  [1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		blocos[9] =  [1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		blocos[10] = [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1];
		blocos[11] = [1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1];
		blocos[12] = [1,3,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1];
		blocos[13] = [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1];
		blocos[14] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1];
		blocos[15] = [1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,1,0,1,1];
		blocos[16] = [1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,1,0,1,1];
		blocos[17] = [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1];
		blocos[18] = [1,0,0,0,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1,1,1];
		blocos[19] = [1,0,0,1,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1,1,1];
		blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	   d = 3;
	   placar = 0;
       x = 60;
       y = 780;
       velx = [0,0,0,0,0,0,4,4,-4,4,4,-4,0,0,0,0,0,0,0,0];
	   vely = [-4,4,4,-4,4,-4,0,0,0,0,0,0,4,-4,4,-4,4,-4,4,-4];
	   monstroX = [240,320,400,480,540,620,80,180,280, 580,660,700,160,240,320,400,480,560,640,720];
       monstroY = [640,720,640,720,780,780,440,520,520,520,520,520,80,120,80,120,80,120,80,120];
		tela = 3;
	}
if(mouseIsPressed && (mouseX >= 450 && mouseX <= 530) && (mouseY >= 520 && mouseY <= 600) )	 {
		blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // FASE 4 FASE 4 FASE 4 FASE 4 FASE 4 FASE 4 FASE 4 FASE 4 FASE 4
		blocos[1] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]; // FASE 4 FASE 4 FASE 4 FASE 4 FASE 4 FASE 4 FASE 4 FASE 4 FASE 4
		blocos[2] =  [1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1];
		blocos[3] =  [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1];
		blocos[4] =  [1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1];
		blocos[5] =  [1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1];
		blocos[6] =  [1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1];
		blocos[7] =  [1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1];
		blocos[8] =  [1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1];
		blocos[9] =  [1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1];
		blocos[10] = [1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1];
		blocos[11] = [1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1];
		blocos[12] = [1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1];
		blocos[13] = [1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1];
		blocos[14] = [1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1];
		blocos[15] = [1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1];
		blocos[16] = [1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1];
		blocos[17] = [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1];
		blocos[18] = [1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1];
		blocos[19] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	   d = 4;
	   placar = 0;
       x = 420;
       y = 740;
       velx = [4,-4,4,4,-4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
	   vely = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	   monstroX = [160,80,780,780,420,60,780,420,140,420,420,140,700,700,220,220,220,420,420,620,620,300,300,300,300,620];
       monstroY = [60,780,780,80,60,420,420,780,140,140,700,700,700,140,220,420,620,620,220,220,420,300,420,540,420,620];
		
	tela = 4 ;
	}
if(mouseIsPressed && (mouseX >= 550 && mouseX <= 630) && (mouseY >= 520 && mouseY <= 600) )	 {
		blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5
		blocos[1] =  [1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1]; // FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5
		blocos[2] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[3] =  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[4] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[5] =  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[6] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[7] =  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[8] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[9] =  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[10] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[11] = [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[12] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[13] = [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[14] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[15] = [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[16] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[17] = [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[18] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[19] = [1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1];
		blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		d = 1;
	   placar = 0;
       x = 420;
       y = 780;
       velx = [4,-4,4,-4,4,-4,4,-4,4,-4,4,0,0,0,0,4,0];
	   vely = [0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,-4,4];
	  monstroX = [120,780,120,780,120,780,120,780,120,120,200,280,340,500,580,660,740];
      monstroY = [100,180,260,340,420,500,580,660,740,80,780,80,780,80,780,80,780,80];
	tela = 5 ;
	}

  
 }

// Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1
// Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1 Fase 1

 else if(tela === 1){
  background(0);
  d = tela;
	fase();
	move();
	itens(x,y);
	noStroke();
  	pac_man(pac_sentido);
	Info();
	 for(i=0;i<10;i++){
		 monstro(i, monstroX[i],monstroY[i]);
		fantasmas =	fantasma[contFrame2];
		image( fantasmas,monstroX[i]-15, monstroY[i]-15);
		tempo_fantasma++
		if(tempo_fantasma > 60){
		contFrame2++;
		tempo_fantasma = 0;
		}
		if ( contFrame2 >= 7 ) {
     contFrame2 = 0; 
  } 
		colisao(420,660,x,y,monstroX[i],monstroY[i]);
	  }
	  if(placar == 2020){
		blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		blocos[1] =  [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1];
		blocos[2] =  [1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1];
		blocos[3] =  [1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1];
		blocos[4] =  [1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1];
		blocos[5] =  [1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1];
		blocos[6] =  [1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1];
		blocos[7] =  [1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1];
		blocos[8] =  [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1];
		blocos[9] =  [1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1];
		blocos[10] = [1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1];
		blocos[11] = [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1];
		blocos[12] = [1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1];
		blocos[13] = [1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1];
		blocos[14] = [1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1];
		blocos[15] = [1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1];
		blocos[16] = [1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1];
		blocos[17] = [1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1];
		blocos[18] = [1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1];
		blocos[19] = [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1];
		blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	 d= 2;
	   v = 3;
	   placar = 0;
       x = 420;
       y = 660;
       velx = [4,0,-4,-4,-4,4,4,4,-4,4,4];
	   vely = [0,-4,0,0,0,0,0,0,0,0,0];
	   monstroX = [80,80,780,780,160,340,700,160,700,160,580];
       monstroY = [80,580,80,580,160,160,160,360,360,700,700];
		tela = 2;	
		 
		  }
	if(v <= 0){
		tela = 6
		}	  
		  
	}
// FASE 2 FASE 2 FASE 2 FASE 2 FASE 2 FASE 2 FASE 2 FASE 2 FASE 2
// FASE 2 FASE 2 FASE 2 FASE 2 FASE 2 FASE 2 FASE 2 FASE 2 FASE 2	
else if(tela === 2){
	
	background(0);
	d = tela;
	fase();
	move();
	itens(x,y);
  	pac_man(pac_sentido);
	Info();
	for(i=0;i<velx.length;i++){
		  monstro(i, monstroX[i],monstroY[i]);
		fantasmas =	fantasma[contFrame2];
		image( fantasmas,monstroX[i]-15, monstroY[i]-15);
		tempo_fantasma++
		if(tempo_fantasma > 60){
		contFrame2++;
		tempo_fantasma = 0;
		}
		if ( contFrame2 >= 7 ) {
     contFrame2 = 0; 
  } 
		colisao(420,660,x,y,monstroX[i],monstroY[i]); 

	  }
	  
	if(v <= 0){
		tela = 6
		}	  
	 if(placar == 2010){
		blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		blocos[1] =  [1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1];
		blocos[2] =  [1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1];
		blocos[3] =  [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[4] =  [1,0,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,0,1];
		blocos[5] =  [1,0,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,0,1];
		blocos[6] =  [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		blocos[7] =  [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		blocos[8] =  [1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		blocos[9] =  [1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		blocos[10] = [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1];
		blocos[11] = [1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1];
		blocos[12] = [1,3,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1];
		blocos[13] = [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1];
		blocos[14] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1];
		blocos[15] = [1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,1,0,1,1];
		blocos[16] = [1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,1,0,1,1];
		blocos[17] = [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1];
		blocos[18] = [1,0,0,0,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1,1,1];
		blocos[19] = [1,0,0,1,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1,1,1];
		blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	   d = 3;
	   v = 3;
	   placar = 0;
       x = 60;
       y = 780;
       velx = [0,0,0,0,0,0,4,4,-4,4,4,-4,0,0,0,0,0,0,0,0];
	   vely = [-4,4,4,-4,4,-4,0,0,0,0,0,0,4,-4,4,-4,4,-4,4,-4];
	   monstroX = [240,320,400,480,540,620,80,180,280, 580,660,700,160,240,320,400,480,560,640,720];
       monstroY = [640,720,640,720,780,780,440,520,520,520,520,520,80,120,80,120,80,120,80,120];
		tela = 3;	
		 
		  }
	
	}
	
// FASE 3  FASE 3  FASE 3  FASE 3 FASE 3 FASE 3 FASE 3 FASE 3 FASE 3	
// FASE 3  FASE 3  FASE 3  FASE 3 FASE 3 FASE 3 FASE 3 FASE 3 FASE 3
else if(tela === 3){
	
	background(0);
	d = tela;
	fase();
	move();
	itens(x,y);
	pac_man(pac_sentido);
	Info();
	for(i=0;i<velx.length;i++){
		  monstro(i, monstroX[i],monstroY[i]);
		fantasmas =	fantasma[contFrame2];
		image( fantasmas,monstroX[i]-15, monstroY[i]-15);
		tempo_fantasma++
		if(tempo_fantasma > 60){
		contFrame2++;
		tempo_fantasma = 0;
		}
		if ( contFrame2 >= 7 ) {
     contFrame2 = 0; 
  } 
		colisao(60,780,x,y,monstroX[i],monstroY[i]);
	  }
	  
	if(v <= 0){
		tela = 6
		}	  
	 if(placar == 1010){
		blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; 
		blocos[1] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]; 
		blocos[2] =  [1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1];
		blocos[3] =  [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1];
		blocos[4] =  [1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1];
		blocos[5] =  [1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1];
		blocos[6] =  [1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1];
		blocos[7] =  [1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1];
		blocos[8] =  [1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1];
		blocos[9] =  [1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1];
		blocos[10] = [1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1];
		blocos[11] = [1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1];
		blocos[12] = [1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1];
		blocos[13] = [1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1];
		blocos[14] = [1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1];
		blocos[15] = [1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1];
		blocos[16] = [1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1];
		blocos[17] = [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1];
		blocos[18] = [1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1];
		blocos[19] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	   d = 4;
	   v = 3;
	   placar = 0;
       x = 420;
       y = 740;
       velx = [4,-4,4,4,-4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
	   vely = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	   monstroX = [160,80,780,780,420,60,780,420,140,420,420,140,700,700,220,220,220,420,420,620,620,300,300,300,300,620];
       monstroY = [60,780,780,80,60,420,420,780,140,140,700,700,700,140,220,420,620,620,220,220,420,300,420,540,420,620];
       tela = 4
		 
		  }
	
	}
// Fase 4  Fase 4 Fase 4 Fase 4 Fase 4 Fase 4 Fase 4 Fase 4 Fase 4 Fase 4	
// Fase 4  Fase 4 Fase 4 Fase 4 Fase 4 Fase 4 Fase 4 Fase 4 Fase 4 Fase 4		
	else if(tela === 4){
	
	background(0);
	d = tela;
	fase();
	move();
	itens(x,y);
	pac_man(pac_sentido);
	Info();
	for(i=0;i<velx.length;i++){
		 monstro(i, monstroX[i],monstroY[i]);
		fantasmas =	fantasma[contFrame2];
		image( fantasmas,monstroX[i]-15, monstroY[i]-15);
		tempo_fantasma++
		if(tempo_fantasma > 60){
		contFrame2++;
		tempo_fantasma = 0;
		}
		if ( contFrame2 >= 7 ) {
     contFrame2 = 0; 
  } 
		colisao(420,660,x,y,monstroX[i],monstroY[i]);
	  }
	  
	if(v <= 0){
		tela = 6
		}	  
	 if(placar === 2620){
		blocos[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5
		blocos[1] =  [1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1]; // FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5
		blocos[2] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[3] =  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[4] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[5] =  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[6] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[7] =  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[8] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[9] =  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[10] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[11] = [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[12] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[13] = [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[14] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[15] = [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[16] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[17] = [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1];
		blocos[18] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
		blocos[19] = [1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1];
		blocos[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		d = 1;
	   placar = 0;
       x = 420;
       y = 780;
       velx = [4,-4,4,-4,4,-4,4,-4,4,-4,4,0,0,0,0,4,0];
	   vely = [0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,-4,4];
	  monstroX = [120,780,120,780,120,780,120,780,120,120,200,280,340,500,580,660,740];
      monstroY = [100,180,260,340,420,500,580,660,740,80,780,80,780,80,780,80,780,80];
	tela = 5 ;
		 
		  }
	
	}
// FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5
// FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5 FASE 5


	else if(tela === 5){
	
	background(0);
	d = tela;
	fase();
	move();
	itens(x,y);
	pac_man(pac_sentido);
	Info();
	for(i=0;i<velx.length;i++){
	  monstro(i, monstroX[i],monstroY[i]);
		fantasmas =	fantasma[contFrame2];
		image( fantasmas,monstroX[i]-15, monstroY[i]-15);
		tempo_fantasma++
		if(tempo_fantasma > 60){
		contFrame2++;
		tempo_fantasma = 0;
		}
		if ( contFrame2 >= 7 ) {
     contFrame2 = 0; 
  } 
		colisao(420,780,x,y,monstroX[i],monstroY[i]);
	  }
	  
	if(v <= 0){
		tela = 6
		}	  
	 if(placar === 3240){
			tela = 7;
		 
		  }
	
	}
// GAME OVER GAME OVER GAME OVER GAME OVER GAME OVER GAME OVER GAME OVER	
// GAME OVER GAME OVER GAME OVER GAME OVER GAME OVER GAME OVER GAME OVER	

if(tela == 6){
	 background(255);
  game = gameover[contFrame];
  image( game, 0, 0);
  tempo_game++
  if(tempo_game> 2){
  contFrame++;
   tempo_game = 0 
}
  if ( contFrame > 1) {
     contFrame = 0; 
    
  } 
 
	 if (keyIsDown(ENTER) ) {
	   tela = 0; 
    } 
	 
	}
	
// PARABÉNS, VOCÊ COMPLETOU O JOGO	
// PARABÉNS, VOCÊ COMPLETOU O JOGO	

else if(tela == 7){
	background(255);
  image( zerou, 0, 0);
if (keyIsDown(ENTER) ) {
	   tela = 0; 
    }
  }
	}
	


