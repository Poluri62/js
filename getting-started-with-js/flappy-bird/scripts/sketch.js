var bird
var walls = []

var slice_index = 0;

function setup(){
    createCanvas(900,500);
    bird = new Bird();
    walls.push(new Wall());
}

function draw(){
    background(0);
    bird.update();
    bird.show();

    if(frameCount % 150 == 0){
        walls.push(new Wall());
    }
    
    for(var i=0; i< walls.length; i++){
        walls[i].update();
        walls[i].show();

        if(walls[i].x_pos < 0){
            slice_index = i+1;
        }
    }

    if(slice_index > 0){
        walls = walls.slice(slice_index, walls.length);
        console.log(walls.length)
        slice_index=0;
    }
}

function keyPressed(){
    if(key == ' '){
        bird.up();
    }
}