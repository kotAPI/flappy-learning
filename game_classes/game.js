class Game {
    constructor() {
        // canvas stuff
        this.canvas = document.querySelector("#game-canvas")
        this.ctx = this.canvas.getContext("2d")
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        // game stuff
        this.pipes = []
        this.birds = []
        this.score = 0;

        this.spawnInterval = 90;
        this.interval = 0;
        this.gen = []
        this.alives = 0;
        this.generation = 0;
        this.backgroundSpeed = 0.1;
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

    }
    isItEnd() {

    }
    display() {

    }


}