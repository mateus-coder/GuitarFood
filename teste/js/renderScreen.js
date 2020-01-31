function renderScreen (props) {
    let { game, img, requestAnimationFrame } = props
    let canvas = document.getElementById('jogo');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.beginPath();
    if(game.sprites.length != 0){
        for(let i in game.sprites){
            let sprite = game.sprites[i];
            if(sprite.status === "VISIBLE")
                ctx.drawImage( img,sprite.sourceX, sprite.sourceY, sprite.width, sprite.height, Math.floor(sprite.x), Math.floor(sprite.y), sprite.width, sprite.height );
        }
    }
    requestAnimationFrame( () => {
        verifyGameState (game);
        renderScreen(props);
    } );
}