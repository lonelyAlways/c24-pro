class Ball{
  constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
  
    this.x=this.x
    this.y=y
    this.r=r
    this.Bodies.circle(this.x,this.y,this.r/2,options)
    World.add(this.body);
  }
display(){

  var angle = this.body.angle;
var paperpos=this.body.position;

 push()
 translate(paperpos.x,paperpos.y)
rotate(angle)
}

}
function keyPressed(){
	if(keyCode ===(UP_ARROW)){
		Matter.Body.applyForce(papperObject.body,papperObject.body.position;{x:85,y:85});
	}
}
