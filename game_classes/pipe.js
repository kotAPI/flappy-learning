class Pipe {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 52;
        this.height = 320;
        this.speed = 3;
    }

    init(canvas, x, y, height) {
        this.x = x;
        this.y = y;
        this.height = height;
    }

    update() {
        this.x -= this.speed;
    }

    isOut() {
        return this.x + this.width < 0;
    }
}