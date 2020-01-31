function Game () {
    this.sprites = new Array;
    this.personagens = new Array;
    this.INIT = "INIT";
    this.PAUSE = "PAUSE";
    this.PLAYING = "PLAYING";
    this.OVER = "OVER";
    this.LOAD = "LOAD";
    this.gameState = this.LOAD;
    this.loadedAssets = 0;
    this.assetsToLoad = new Array;
    this.contador = 0;
    this.playerState = "NONE";
    this.contWin = 0;
    this.contLose = 0;
    this.contPlay = 0;
    this.contPause = 0;
    this.dropNotes = {};
    this.notesInGame = new Array;
    this.lightningInGame = new Array;
    this.itemsInitSceneComposition = new Array;
    this.sceneWaitingStart = new Array;
}

Game.prototype.removeObjects = function (props) {
    let { objectSpec, array } = props;
    let indice = array.indexOf(objectSpec);
    this.sprites.splice(indice, 1);
    array.splice(indice, 1);
}
