class Parent {
    constructor(x, y, width, height) {
        var describer = {
            density: 3,
            restitution: 0.5,
            isStatic: false
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, describer);
        this.image = loadImage('trashcan.png');
        World.add(world, this.body)
    }
    show() {

        push();

        imageMode(CENTER);

        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();

    }

}