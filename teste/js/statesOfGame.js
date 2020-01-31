
function verifyGameState (game) {
    const resetCounts = (here) => {
        let vetor = ["contWin", "contPause", "contLose", "contPlay"];
        let valueNow = game[`${here}`];
        for(let v in vetor){
            if(game[`${vetor[v]}`] !== valueNow)
                game[`${vetor[v]}`] = 0;
        }
    }
    const setInvisibleObjects = (props) => {
        let { arrays, game } = props;
        for(let i in arrays){
            for(let j in game[arrays[i]].length)
                game[arrays[i]][j].status = "INVISIBLE";
        }
    }
    const removeInvisibleObjects = (props) => {
        let { arrays, game } = props;
        for(let i in arrays){
            for(let j in game[arrays[i]].length)
                if(game[arrays[i]][j].status === "INVISIBLE"){
                    game.removeObjects({
                        objectSpec : game[arrays[i]][j],
                        array : game.sprites
                    });
                    game.removeObjects({
                        objectSpec : game[arrays[i]][j],
                        array : game.sceneWaitingStart
                    });
                }
        }
    }
    for(let i in listeners["keysPressed"]){
        if(listeners["keysPressed"][i] === "Enter"){
            game.gameState !== game.PLAYING && game.gameState !== game.OVER ? game.gameState = game.PLAYING : game.gameState = game.PAUSE;
            listeners["keysPressed"].splice(listeners["keysPressed"][i], 1);
        }
    }//
    switch(game.gameState){
        case game.PLAYING :
            resetCounts("contPlay");
            game.contPlay === 0 ? Scenes["PLAYING"]({
                game : game,
                win : false
            }) : game.contPlay++;
            repeatOfLogicInGame(game);
            break;
        case game.OVER :
            
            if(game.playerState === "WIN"){
                resetCounts("contWin");
                game.contWin === 0 ? Scenes["OVER"]({
                    game : game,
                    win : true
                }) : game.contWin++;
            }
            else{
                if(game.playerState === "LOSE"){
                    resetCounts("contLose");
                    game.contLose === 0 ? Scenes["OVER"]({
                        game : game,
                        win : false
                    }) : game.contLose++;
                }
            }
            break;
        case game.PAUSE :
            resetCounts("contPause");
            setInvisibleObjects({
                arrays : ["personagens", "itemsInitSceneComposition", "sceneWaitingStart"],
                game : game
            });
            removeInvisibleObjects({
                arrays : ["sceneWaitingStart"],
                game : game
            });
            game.contPause === 0 ? Scenes["PAUSE"]({
                game : game,
                win : false
            }) : game.contPause++;
            break;
    }
}