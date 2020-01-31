
function funcaoGame(e){
	e.preventDefault();
	var tela = document.getElementById('jogo');
	tela.style.display = 'block';
}
let botao = document.getElementsByTagName('button')[0];

botao.addEventListener('click', funcaoGame, false);

(function(){

	let initFunctions = {
		createGame : () => {
			return new Game();
		},
		handleStartingStateGame : () => {
			game.loadedAssets++;
			if(game.loadedAssets === game.assetsToLoad.length){
				img.removeEventListener('load', handleStartingStateGame ,false);
				//inicia o jogo
				game.gameState = game.INIT;
			}
		},
	}
	let { createGame, handleStartingStateGame } = initFunctions;
	let game = createGame();

	//compose initial scene with source based images
	Scenes[game.gameState]({
		game : game,
		win : false
	});

	let img = new Image();
	img.addEventListener('load', handleStartingStateGame, false);
	img.src = "../source/images/img.png";
	game.assetsToLoad.push(img);

	listeners["createEventListener"]();

	renderScreen({
		game : game,
		img : img,
		requestAnimationFrame : requestAnimationFrame
	})

	//fundo -----------------------------------
	
	//imagem-------------------------------------
	
	
	
}());
