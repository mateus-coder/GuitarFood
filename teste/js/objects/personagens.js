
function Personagens (props) {
    Sprites.call(this, props);
	this.NORMAL = 1;
	this.CRAZY = 2;
	this.LOW = 3;
	this.mode = this.NORMAL;
	this.status = "VISIBLE";
}
Personagens.prototype = Object.create(Sprites.prototype);