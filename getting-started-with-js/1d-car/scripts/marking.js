function Marking(x_pos){
    this.x_pos = x_pos;
    this.y_pos = -50;

    this.thickness = 5;
    this.length = 50;
    this.velocity = 2;

    this.show = function(){
        fill(255);
        rect(this.x_pos, this.y_pos, this.thickness, this.length);
        
    }

    this.update = function(){
        this.y_pos += this.velocity;
    }
}