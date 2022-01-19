function Car(){
    this.x_pos = width/2;
    this.y_pos = height/2;

    this.xv = 3;
    this.yv = 0;

    this.show = function(){
        fill(255,0,0);
        rect(this.x_pos-20, this.y_pos, 75,90);
    }

    this.moveRight = function(){
        this.x_pos += this.xv;

        if(this.x_pos>width-55){
            this.x_pos = width-55;
        }
    }

    this.moveLeft = function(){
        this.x_pos -= this.xv;

        if(this.x_pos<0){
            this.x_pos = 0;
        }
    }
}