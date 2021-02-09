
class Balls extends Parent {
        constructor(x, y, width, height) {
            super(x, y, width, height);
            this.image = loadImage('paper.png');
  
        }
        show() {
            super.show();

        }
        move() {
            if (keyDown('a')) {
                this.body.position.y = this.body.position.y - 4;
                this.body.position.x = this.body.position.x + 4;
            }
            this.body.position.y = this.body.position.y--;
        }
        move5() {
            if (keyDown(UP_ARROW)) {
                this.body.position.y = this.body.position.y - 4;
                
            }
            this.body.position.y = this.body.position.y++;
        }
   
        move2() {
            if (keyDown(DOWN_ARROW)) {
                this.body.position.y = this.body.position.y + 4;
                this.body.position.x = this.body.position.x + 0;
            }
            
        }
        move3() {
            if (keyDown(RIGHT_ARROW)) {
                this.body.position.y = this.body.position.y + 0;
                this.body.position.x = this.body.position.x + 4;
            }
            
        }
        move4() {
            if (keyDown(LEFT_ARROW)) {
                this.body.position.y = this.body.position.y + 0;
                this.body.position.x = this.body.position.x - 4;
            }
            
        }
    }
    class Ball2 extends Parent{
        constructor(x, y, width, height) {
            super(x, y, width, height);
            this.image = loadImage('download-removebg-preview.png') 
        }
        show(){
        super.show();
        }
        move() {
            if (keyDown('a')) {
                this.body.position.y = this.body.position.y - 4;
                this.body.position.x = this.body.position.x + 4;
            }
            this.body.position.y = this.body.position.y--;
        }
        move5() {
            if (keyDown(UP_ARROW)) {
                this.body.position.y = this.body.position.y - 4;
                
            }
            this.body.position.y = this.body.position.y++;
        }
   
        move2() {
            if (keyDown(DOWN_ARROW)) {
                this.body.position.y = this.body.position.y + 4;
                this.body.position.x = this.body.position.x + 0;
            }
            
        }
        move3() {
            if (keyDown(RIGHT_ARROW)) {
                this.body.position.y = this.body.position.y + 0;
                this.body.position.x = this.body.position.x + 4;
            }
            
        }
        move4() {
            if (keyDown(LEFT_ARROW)) {
                this.body.position.y = this.body.position.y + 0;
                this.body.position.x = this.body.position.x - 4;
            }
        
    }
}
class Ball3 extends Parent{
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.image = loadImage('apple.png') 
    }
    show(){
    super.show();
    }
    move() {
        if (keyDown('a')) {
            this.body.position.y = this.body.position.y - 4;
            this.body.position.x = this.body.position.x + 4;
        }
        this.body.position.y = this.body.position.y--;
    }
    move5() {
        if (keyDown(UP_ARROW)) {
            this.body.position.y = this.body.position.y - 4;
            
        }
        this.body.position.y = this.body.position.y++;
    }

    move2() {
        if (keyDown(DOWN_ARROW)) {
            this.body.position.y = this.body.position.y + 4;
            this.body.position.x = this.body.position.x + 0;
        }
        
    }
    move3() {
        if (keyDown(RIGHT_ARROW)) {
            this.body.position.y = this.body.position.y + 0;
            this.body.position.x = this.body.position.x + 4;
        }
        
    }
    move4() {
        if (keyDown(LEFT_ARROW)) {
            this.body.position.y = this.body.position.y + 0;
            this.body.position.x = this.body.position.x - 4;
        }
    
}
}
class Ball4 extends Parent{
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.image = loadImage('plastic.png') 
    }
    show(){
    super.show();
    }
    move() {
        if (keyDown('a')) {
            this.body.position.y = this.body.position.y - 4;
            this.body.position.x = this.body.position.x + 4;
        }
        this.body.position.y = this.body.position.y--;
    }
    move5() {
        if (keyDown(UP_ARROW)) {
            this.body.position.y = this.body.position.y - 4;
            
        }
        this.body.position.y = this.body.position.y++;
    }

    move2() {
        if (keyDown(DOWN_ARROW)) {
            this.body.position.y = this.body.position.y + 4;
            this.body.position.x = this.body.position.x + 0;
        }
        
    }
    move3() {
        if (keyDown(RIGHT_ARROW)) {
            this.body.position.y = this.body.position.y + 0;
            this.body.position.x = this.body.position.x + 4;
        }
        
    }
    move4() {
        if (keyDown(LEFT_ARROW)) {
            this.body.position.y = this.body.position.y + 0;
            this.body.position.x = this.body.position.x - 4;
        }
    
}
}

class Ball5 extends Parent{
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.image = loadImage('tinca.png') 
    }
    show(){
    super.show();
    }
    move() {
        if (keyDown('a')) {
            this.body.position.y = this.body.position.y - 4;
            this.body.position.x = this.body.position.x + 4;
        }
        this.body.position.y = this.body.position.y--;
    }
    move5() {
        if (keyDown(UP_ARROW)) {
            this.body.position.y = this.body.position.y - 4;
            
        }
        this.body.position.y = this.body.position.y++;
    }

    move2() {
        if (keyDown(DOWN_ARROW)) {
            this.body.position.y = this.body.position.y + 4;
            this.body.position.x = this.body.position.x + 0;
        }
        
    }
    move3() {
        if (keyDown(RIGHT_ARROW)) {
            this.body.position.y = this.body.position.y + 0;
            this.body.position.x = this.body.position.x + 4;
        }
        
    }
    move4() {
        if (keyDown(LEFT_ARROW)) {
            this.body.position.y = this.body.position.y + 0;
            this.body.position.x = this.body.position.x - 4;
        }
    
}
}

    class Dustbin extends Parent {
        constructor(x, y, width, height) {
            super(x, y, width, height);
            this.image = loadImage('dustbingreen.png');
        }
        show() {
            super.show();

        }


    }
    class Brick {
        constructor(x, y, width, height) {
            var describer = {
                density:9999999999,
                restitution: 0.1,
                isStatic: true
            }
            this.width = width;
            this.height = height;
            this.body = Bodies.rectangle(x, y, width, height, describer);
            World.add(world, this.body)
        }
        show() {
            push();

            rectMode(CENTER);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
            pop();

        }

    }