class Bird {
    constructor() {
        this.gravity = 0;
        this.x = 80;
        this.y = 250;
        this.height = 30;
        this.width = 40;
        this.alive = true;
        this.velocity = 0.3;
        this.jump = -6
        this.rotation = 0;

        // AI STUFF
        this.isAIControlled = false;
    };
    init(canvas, x, y) {
        console.log("Bird initialized")
        this.x = canvas.width - x;
        this.y = canvas.height - y;

        window.onkeydown = (e) => {
            if (this.isAIControlled) {
                return;
            }
            if (e.key == " ") {
                this.flap()
            }
        }
    }
    flap() {
        this.gravity = this.jump;
    }
    update() {
        this.gravity += this.velocity;
        this.y += this.gravity;
    }
    isDead(height, pipes) {
        if (this.y >= height || this.y + this.height <= 0) {
            return true;
        }
        for (var i in pipes) {
            if (!(
                this.x > pipes[i].x + pipes[i].width ||
                this.x + this.width < pipes[i].x ||
                this.y > pipes[i].y + pipes[i].height ||
                this.y + this.height < pipes[i].y
            )) {
                return true;
            }
        }
        return false;
    }
    display() {

    }


}