const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var shooter;
var rope;

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600, 480, 1200, 20);

    block1 = new Block(1000, 155, 30, 40);
    block2 = new Block(970, 195, 30, 40);
    block3 = new Block(1000, 195, 30, 40);
    block4 = new Block(1030, 195, 30, 40);
    block5 = new Block(940, 235, 30, 40);
    block6 = new Block(970, 235, 30, 40);
    block7 = new Block(1000, 235, 30, 40);
    block8 = new Block(1030, 235, 30, 40);
    block9 = new Block(1060, 235, 30, 40);

    shooter = new Shooter(350, 250, 50, 50);

    rope = new Rope(shooter.body, {x: 300, y: 450})
  

    var render = Render.create({
		element: document.body,   //display all the bodies
		engine: engine,           //display all the functions
		options:{                 //dimension of the render
			width: 1200,
			height: 500,
			wireframes: false
		}
    });
    Render.run(render);           //starting the render    
    Engine.run(engine);  

}

function draw() {
	background("black");
    Engine.update(engine);
    
    ground.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    shooter.display();

    rope.display();

}