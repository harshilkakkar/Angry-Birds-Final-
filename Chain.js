class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 10,
            stiffness : 0.05
            }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
    var b1 = this.chain.bodyA.position;
    var b2 = this.chain.bodyB.position;

    strokeWeight(3);
    line(b1.x, b1.y, b2.x, b2.y);

    }
 






}