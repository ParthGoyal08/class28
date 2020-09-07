class Chain{
    constructor(point1, bodyB){
        var options = {
            pointA: point1,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
     if(this.chain.bodyB ){
        
        
        var pointA = this.chain.pointA;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
   fly(){
this.chain.bodyB = null;


} 
    
}