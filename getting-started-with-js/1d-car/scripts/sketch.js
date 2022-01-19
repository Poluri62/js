var markings1 = [];
var markings2 = [];

var car;
var traffic = [];
function setup(){
    createCanvas(400, 600);
    car = new Car();
    traffic.push(new Obstacle(int(random(1,3))));
    markings1.push(new Marking(width/3));
    markings2.push(new Marking(2*width/3));
}

function draw(){
    background(0);
    if(frameCount % 100 == 0){
        markings1.push(new Marking(width/3));
        markings2.push(new Marking(2*width/3));
    }
    for(var i=0; i<markings1.length; i++){
        markings1[i].update();
        markings1[i].show();
    }
    for(var i=0; i<markings2.length; i++){
        markings2[i].update();
        markings2[i].show();
    }


    car.show();
    if(keyIsPressed && key == 'd'){
        car.moveRight();
    }
    if(keyIsPressed && key == 'a'){
        car.moveLeft();
    }

    if(frameCount % 500 == int(random(0,120))){
        traffic.push(new Obstacle(int(random(1,3))));
    }

    for(var i=0; i<traffic.length; i++){
        traffic[i].update();
        traffic[i].show();
    }

    
}