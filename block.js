class Block {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            'resitution': 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}