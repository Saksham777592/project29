class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            'stiffness':1
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB;

        World.add(world, this.rope);
    }
    display() {
        var point1 = this.pointB;
        var point2 = this.rope.bodyA.position;

        push();
        strokeWeight(4);
        stroke("white");
        line(point1.x, point1.y, point2.x, point2.y);
        pop();
    }
}   