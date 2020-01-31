const propsNoteColors = {
    RED : (raio) => {
        if(raio){
            return ({

            });
        }
        else{
            return ({

            });
        }
    },
    GREEN : (raio) => {
        if(raio){
            return ({

            });
        }
        else{
            return ({

            });
        }
    },
    YELLOW : (raio) => {
        if(raio){
            return ({

            });
        }
        else{
            return ({

            });
        }
    },
    ORANGE : (raio) => {
        if(raio){
            return ({

            });
        }
        else{
            return ({

            });
        }
    },
    BLUE : (raio) => {
        if(raio){
            return ({

            });
        }
        else{
            return ({

            });
        }
    }
},


const dropNotes = {
    indice : 0,
    firstNote : true,
    verifyArrayNotes :  (props) => {
        let { indice } = dropNotes;
        let { game, firstNote } = props;

        switch (firstNote){
            case true :
                firstNote = false;
                return ({
                    colors : ArrayNotes.color[indice],
                    temp : ArrayNotes.timeStemp[indice]
                });
            case false : 
                if(game.contador === (ArrayNotes.timeStemp[indice] * 60) ){
                    game.contador = 0;
                    indice++;
                    return ({
                        colors : ArrayNotes.color[indice],
                        temp : ArrayNotes.timeStemp[indice]
                    });
                }
                else{
                    game.contador++;
                    return null;
                }
        }
        
    },
    createNote : (props) => {
        let { color, temp, game } = props;
        let note = new Sprites(propsNoteColors[color](false));
        game.sprites.push(note);
        game.notesInGame.push(note);
        if(temp > 1){
            let lightning = new Sprites(propsNoteColors[color](true));
            game.sprites.push(lightning);
            game.lightningInGame.push(lightning);
        }

    },
    leaveObject : (props) => {
        let { array, game } = props;
        for(let i in array){
            let objeto = array[i];
            if(objeto.y > (600 - objeto.height) ){
                game.removeObjects({
                    objectSpec : objeto,
                    array : array
                })
            }
        }
    },
    invalidKey : () => {
        //emitir alerta sonoro e abaixar a pontuação
    },
    validatePlayNote : () => {
        const validKeys = {
            A : () => {
                return "GREEN";
            },
            S : () => {
                return "BLUE";
            },
            D : () => {
                return "YELLOW";
            },
            F : () => {
                return "RED";
            },
            G : () => {
                return "ORANGE";
            },
            ENTER : () => {
                return "ENTER";
            }
        }
        for(let i in listeners["keysPressed"].length){
            let key = listeners["keysPressed"][i];
            key = key.toUpperCase();
            if(validKeys[key])
                listeners["keysPressed"][i] = validKeys[key];
            else
                dropNotes["invalidKey"]();
        }
    }
}

function repeatOfLogicInGame (game) {
    let { verifyArrayNotes, firstNote, createNote, leaveObject, validatePlayNote } = dropNotes; 
    game.dropNotes = verifyArrayNotes({
        game : game,
        firstNote : firstNote
    });
    if(game.dropNotes != null){
        let{ colors, temp } = game.dropNotes;
        for(let i in colors) {
            createNote({
                color : colors[i],
                temp : temp[i],
                game : game
            });
        }
    }
    //verify music note exit
    leaveObject({
        game : game,
        array : game.notesInGame
    });
    //verify rays exit
    leaveObject({
        game : game,
        array : game.lightningInGame
    });
    validatePlayNote();

} 