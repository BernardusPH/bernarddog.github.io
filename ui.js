export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 30;
    this.fontFamily = "Helvetica";
    this.liveImage=lives;
  }
  draw(context) {
    context.save();
    context.shadowOffsetX=2;
    context.shadowOffsetY=2;
    context.shadowColor="white"
    context.shadowBlur=0;
    context.font = this.fontSize + 'px ' + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;
    context.fillText("Score: " + this.game.score, 20, 50);
    context.font=this.fontSize*.8 + 'px ' +this.fontFamily;
    context.fillText("Time: " + (this.game.time*.001).toFixed(1),20,80)
    
    
    for(let i=0;i<this.game.lives;i++){
        context.drawImage(this.liveImage,25*i+25,95,25,25)
    }
    if(this.game.gameOver){
        context.textAlign="center";
        context.font=this.fontSize*2+ 'px '+this.fontFamily;
        if(this.game.score>200 && !this.game.lives<=0 && this.game.time >this.game.maxTime){
            context.fillText("Yes",this.game.width*.5,this.game.height*.5 - 20)
            context.font=this.fontSize*.7+ 'px '+this.fontFamily;
            context.fillText("You found an easter egg",this.game.width*.5,this.game.height*.5+20)
        }else if(this.game.score>=this.game.maxScore && this.game.lives>0){
            context.fillText("Oheeeeeyaaaa",this.game.width*.5,this.game.height*.5 - 20)
            context.font=this.fontSize*.7+ 'px '+this.fontFamily;
            context.fillText("You won baby!!",this.game.width*.5,this.game.height*.5+20)
        }
        
        else{
            context.fillText("Love at first bite",this.game.width*.5,this.game.height*.5 - 20)
            context.font=this.fontSize*.7+ 'px '+this.fontFamily;
            context.fillText("Better luck Next time!",this.game.width*.5,this.game.height*.5+20)
        }


    }
    context.restore();

}
}
