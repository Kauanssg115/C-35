class Fruit{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 0.15;
        this.body = Bodies.circle(x, y, width, height);
        this.image = loadImage("melon.png");
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.x, this.y);
        rect(-10, -20, this.width, this.height);
        pop();
    }
}