class Game {
    constructor() {
        // canvas stuff
        this.canvas = document.querySelector("#game-canvas")
        this.ctx = this.canvas.getContext("2d")
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.FPS = 60;

        // game stuff
        this.pipes = []
        this.birds = []
        this.score = 0;

        this.spawnInterval = 90;
        this.interval = 0;
        this.gen = []
        this.alives = 0;
        this.generation = 0;
        this.backgroundSpeed = 0.5;
        this.backgroundX = 0;
        this.maxScore = 0;
    }

    start() {
        this.interval = 0;
        this.score = 0;
        this.pipes = [];
        this.birds = [];
        // this.ctx.fillStyle = "black";
        // this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.drawImage(images.background, 0, 0);


        this.gen = 0 // TODO

        // TODO
        // Generate birds
        this.generation++;
        this.alives = this.birds.length;
    }

    update() {
        this.backgroundX += this.backgroundSpeed; // ← THIS is the movement

        // make it call update again
        if (this.FPS == 0) {
            setZeroTimeout(() => this.update());
        } else {
            setTimeout(() => this.update(), 1000 / this.FPS);
        }

    }
    isItEnd() {

    }
    display() {
        // TODO
        const bg = images.background;
        const w = bg.width;


        const x = -Math.floor(this.backgroundX % w);

        this.ctx.clearRect(0, 0, this.width, this.height);


        // background position updates
        for (var i = 0; i < Math.ceil(this.width / images.background.width) + 1; i++) {
            this.ctx.drawImage(
                images.background,
                i * images.background.width - Math.floor(this.backgroundX % images.background.width),
                0
            );
        }

        requestAnimationFrame(() => this.display());

    }


}