var game = undefined;

let maxScore = 0;
let images = {}


const GAME_SPRITES = {
    "background": "assets/background.png",
    "bird": "assets/bird.png",
    "pipetop": "assets/pipetop.png",
    "pipebottom": "assets/pipebottom.png"
}

const loadImages = (sources, callback) => {
    let loadedImages = 0;
    let imageMap = {};

    for (var image in sources) {
        imageMap[image] = new Image();
        imageMap[image].src = sources[image];
        imageMap[image].onload = () => {
            loadedImages++;
            if (loadedImages == Object.keys(sources).length) {
                images = imageMap
                callback(imageMap)
            }
        }
    }

}

const startGame = () => {
    console.log("Game started")
    game = new Game()
    game.start()
    game.update()
    game.display()
    console.log(game)
}

window.onload = () => {
    loadImages(GAME_SPRITES, (images) => {
        startGame()
    })
}