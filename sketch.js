const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var shooter;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var sling;
var ball1;
var gr1,gr2,gr3,gr4,gr5,gr6,gr7,gr8,gr9,gr10;


function setup(){
    var canvas = createCanvas(1000,550);
    engine = Engine.create();
    world = engine.world;

    gr1 = new Ground(650,540,1300,15);
    gr2 = new Ground(640,400,200,30);
    gr3 = new Ground(400,450,200,30);
    gr4 = new Ground(860,350,200,30);
    ball1 = new Ball(30,400,30);

    box1 = new Box(590,300);
    box2 = new Box(640,300);
    box3 = new Box(690,300);
    box4 = new Box(610,250);
    box5 = new Box(660,250);
    box6 = new Box(635,200);
    box7 = new Box2(350,400);
    box8 = new Box2(400,400);
    box9 = new Box2(450,400);
    box10 = new Box2(375,350);
    box11 = new Box2(425,350);
    box12 = new Box2(400,300);
    box13 = new Box3(800,300);
    box14= new Box3(850,300);
    box15 = new Box3(900,300);
    box16 = new Box3(825,250);
    box17 = new Box3(875,250); 
    box18 = new Box3(850,200);
    sling = new SlingShot(ball1.body,{x:200, y:400});
}

function draw(){
    background(0);
    Engine.update(engine);
 
    gr1.display();
    gr2.display();
    gr3.display();
    gr4.display();

    ball1.display();  

    box1.display(); 
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display(); 
    box17.display();
    box18.display();
    sling.display();
   // mouseDragged();
    //mouseReleased();
}

function mouseDragged(){
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

