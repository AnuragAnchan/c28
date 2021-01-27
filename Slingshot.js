class Slingshot{
    constructor(b1,pointB){
   var options={
            bodyA:b1,
            pointB:pointB,
            stiffness:0.04,
            length:5,
        }
     this.pointB=pointB;   
     this.chain=Constraint.create(options);
     World.add(world,this.chain);
    }
    fly(){
      this.chain.bodyA=null; //nothing

}
    display(){
        if(this.chain.bodyA){
        var posA=this.chain.bodyA.position;
        var posB=this.pointB;
        strokeWeight (3);
    line(posA.x,posA.y,posB.x,posB.y);
        }
    }

}