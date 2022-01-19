function Wall(){
    this.x_pos = width;
    this.top_length = random(100, 2*height/3);
    this.bottom_length = height - 100 - this.top_length;
    this.wall_thickness = 30;

    this.velocity = 3;
    this.acc = 0.01;

    this.show = function(){
        fill(255);

        rect(this.x_pos,0,this.wall_thickness,this.top_length);
        rect(this.x_pos, height-this.bottom_length, this.wall_thickness, this.bottom_length);
        
    }

    this.update = function(){
        this.x_pos -= this.velocity;
    }

}