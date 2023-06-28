const game = {
	lives: 3,
	coins: 0,

	get points() {
		return this.coins * 10;
	},

	playerDies() {
		if (this.lives > 0) {
			this.lives--;
		}
	},

	newGame() {
		this.lives = 3;
		this.coins = 0;
	},
};

console.log('lives =', game.lives);
console.log('coins =', game.coins);
console.log('points =', game.points);

game.coins = 2;
console.log('points =', game.points);

game.playerDies();
console.log('lives =', game.lives);

game.playerDies();
console.log('lives =', game.lives);

game.playerDies();
console.log('lives =', game.lives);

game.newGame();
console.log('lives =', game.lives);
console.log('coins =', game.coins);
