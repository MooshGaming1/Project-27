class Rope{
    constructor(bodyA, bodyB,x,y){
        this.x=x
        this.y=y
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            
            
            pointB:{x:this.x,y:this.y}
        }
       
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){
        
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            strokeWeight(2)
            var anchor1x=pointA.x
            var anchor1y=pointA.y
            var anchor2x=pointB.x+this.x
            var anchor2y=pointB.y+this.y
            
            stroke(48,22,8);
            line(anchor1x,anchor1y,anchor2x,anchor2y)
            
    }
    
}