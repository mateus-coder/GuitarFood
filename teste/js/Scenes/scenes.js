const Scenes = {
    INIT : (props) => {
        let { win, game } = props;
        //background to wait the user press enter
        let backgroundWait = new Sprites({
            sourceX : 0,
            sourceY : 0,
            width : 50,
            height : 50,
            x : 50,
            y : 60
        });
        game.sprites.push(backgroundWait);
        game.sceneWaitingStart.push(backgroundWait);
    },
    PLAYING : (props) => {
        let { win, game } = props;
        //personagens
        for(let i = 0; i < 5; i++){
            let personagens = new Personagens({
                sourceX : (i * 100) + 100,
                sourceY : 0,
                width : 50,
                height : 50,
                x : 50,
                y : 50
            });
            game.sprites.push(personagens);
            game.personagens.push(personagens);
        }
        //background just to do maybe a animation in future
        let staticBackground = new Sprites({
            sourceX : 0,
            sourceY : 0,
            width : 1000,
            height : 600,
            x : 0,
            y : 0
        });
        game.sprites.push(staticBackground);
        game.itemsInitSceneComposition.push(staticBackground);
    },
    PAUSE : (props) => {
        let { win, game } = props;
        let backgroundPause = new Sprites({
            sourceX : 100,
            sourceY : 100,
            width : 50,
            height : 50,
            x : 0,
            y : 0
        });
        game.sprites.push(backgroundPause);
        game.scenePaused.push(backgroundPause);
    },
    OVER : (props) => {
        let { win, game } = props;
        if(win){
            let backgroundOfChampion = new Sprites({
                sourceX : 100,
                sourceY : 100,
                width : 50,
                height : 50,
                x : 0,
                y : 0
            });
            game.sprites.push(backgroundOfChampion);
            game.sceneGlorious.push(backgroundOfChampion);
        }
        else{
            let backgroundOfLoser = new Sprites({
                sourceX : 100,
                sourceY : 100,
                width : 50,
                height : 50,
                x : 0,
                y : 0
            });
            game.sprites.push(backgroundOfLoser);
            game.sceneCry.push(backgroundOfLoser);
        }
    }
}