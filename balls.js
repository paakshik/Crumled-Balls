const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine = Engine.create();
var world = engine.world;

function preload() {

    dust = loadImage('dustbingreen.png');
    
}

function setup() {
    createCanvas(1200, 600);
    bs = new Balls(200, 200, 70, 70);
    ground = new Ground(600, height - 10, 1200, 100);
    brick1 = new Brick(810, 500, 10, 180);
    brick3 = new Brick(940, 500, 10, 180);
    brick4 = new Brick(55,90,40,990);
    brick5 = new Brick(1170,90,40,990);
    aa = new Ball2(200,200,50,50);
    apple =new Ball3(200,200,50,50)
    plastic =new Ball4(200,200,50,50)
    tinca =new Ball5(200,200,50,50)
    Engine.run(engine)
}

function draw() {
    background(255)
    bs.show();
aa.show();
apple.show();
plastic.show();
tinca.show();
    bs.move();  
    bs.move2();
    
    bs.move4();
    bs.move3();
    bs.move5();
    brick1.show();
    brick3.show();
    brick4.show();
    brick5.show();
    image(dust, 800, 410, 150, 180);
    ground.show();


if (keyDown('b')){
    
}
aa.move()
aa.move2()
aa.move3()
aa.move4()
aa.move5()
tinca.move2()
tinca.move()
tinca.move3()
tinca.move5()

tinca.move4()

apple.move()
apple.move2()
apple.move3()
apple.move4()
apple.move5()
plastic.move2()
plastic.move()
plastic.move3()
plastic.move4()
plastic.move5()
if (keyDown('space')){
    World.remove(world,
        )
    bs = new Balls(200, 200, 70, 70);
}




}