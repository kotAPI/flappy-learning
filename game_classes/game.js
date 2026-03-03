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


        // spawn initial pipes
        this.spawnPipes();

        // create player
        this.bird = new Bird()
        this.bird.init(this.canvas, this.width - 80, this.height - 250)
        this.birds.push(this.bird)
    }

    update() {
        this.backgroundX += this.backgroundSpeed; // ← THIS is the movement


        this.interval++
        this.score++
        this.maxScore = Math.max(this.maxScore, this.score)
        if (this.interval == this.spawnInterval) {
            this.interval = 0;
            this.spawnPipes();
        }

        this.pipes.forEach(pipe => {
            pipe.update();
        });

        this.pipes = this.pipes.filter(pipe => !pipe.isOut());

        this.birds.forEach(bird => {
            bird.update();
        });



        // make it call update again
        if (this.FPS == 0) {
            setZeroTimeout(() => this.update());
        } else {
            setTimeout(() => this.update(), 1000 / this.FPS);
        }

    }
    spawnPipes() {
        var deltaBord = 50;
        var pipeHoll = 120;
        var hollPosition = Math.round(Math.random() * (this.height - deltaBord * 2 - pipeHoll)) + deltaBord;
        var pipe1 = new Pipe();
        pipe1.init(this.canvas, this.width, 0, hollPosition);
        var pipe2 = new Pipe();
        pipe2.init(this.canvas, this.width, hollPosition + pipeHoll, this.height - (hollPosition + pipeHoll));
        this.pipes.push(pipe1);
        this.pipes.push(pipe2);
    }
    isItEnd() {

    }
    display() {
        // TODO
        const bg = images.background;
        const w = bg.width;

        this.ctx.clearRect(0, 0, this.width, this.height);




        // background position updates
        for (var i = 0; i < Math.ceil(this.width / images.background.width) + 1; i++) {
            this.ctx.drawImage(
                images.background,
                i * images.background.width - Math.floor(this.backgroundX % images.background.width),
                0
            );
        }

        for (var i in this.pipes) {
            if (i % 2 == 0) {
                this.ctx.drawImage(images.pipetop, this.pipes[i].x, this.pipes[i].y + this.pipes[i].height - images.pipetop.height, this.pipes[i].width, images.pipetop.height);
            } else {
                this.ctx.drawImage(images.pipebottom, this.pipes[i].x, this.pipes[i].y, this.pipes[i].width, images.pipetop.height);
            }
        }

        // Render birds
        for (var bird of this.birds) {
            this.ctx.save();
            this.ctx.translate(bird.x, bird.y);
            this.ctx.rotate(bird.rotation);
            this.ctx.drawImage(images.bird, -bird.width / 2, -bird.height / 2, bird.width, bird.height);
            this.ctx.restore();
        }


        requestAnimationFrame(() => this.display());

    }


}