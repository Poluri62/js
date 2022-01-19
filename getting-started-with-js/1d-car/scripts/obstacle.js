function Obstacle(lane){
    if(lane==1){
        this.x_pos = width/6 - 35;;
        this.y_pos = -90;
    } else if(lane == 2){
        this.x_pos = width/2 - 35;;
        this.y_pos = -90;
    } else{
        this.x_pos = 5*width/6 - 35;;
        this.y_pos = -90;
    }
    
    this.velocity = 2;

    this.show = function(){
        fill(0,0,255);
        rect(this.x_pos, this.y_pos, 70, 90);
    }

    this.update = function(){
        this.y_pos += this.velocity;
    }
}