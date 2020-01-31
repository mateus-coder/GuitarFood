const listeners = {
    keysPressed : new Array,
    createEventListener : () => {
        document.addEventListener('keypress', listeners["callbackPress"], false);
        document.addEventListener('keyup', listeners["callbackUp"], false);
    },
    callbackPress : (e) => {
        let keyPressed = e.key;
        let indice = listeners["keysPressed"].indexOf(keyPressed);
        indice === -1 ? listeners["keysPressed"].push(keyPressed) : indice *= 1;
        console.log(listeners["keysPressed"]);
    },
    callbackUp : (e) => {   
        let keyPressed = e.key;
        let indice = listeners["keysPressed"].indexOf(keyPressed);
        indice !== -1 ? listeners["keysPressed"].splice(indice, 1) : indice *= 1;
        console.log(listeners["keysPressed"]);
    }
}