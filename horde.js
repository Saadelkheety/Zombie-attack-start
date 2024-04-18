//Constructor for the horde
function Horde() {
	//an array of zombies
	this.zombies = [];
    this.gameOver = false;

	//call each zombies drawing code and update it's location ready to be drawn again
	this.drawZombies = function() {
		for (var i = 0; i < this.zombies.length; i++) {
			this.zombies[i].draw();
			this.zombies[i].updateLocation();
            //check if the game is over
            if (!this.gameOver, this.zombies[i].gameOver()) {
                this.gameOver = true;
            }
    }
	}

	//add n zombies to the horde
	this.addZombies = function(n) {
		for (var i = 0; i < n; i++) {
			this.zombies.push(new zombie(random(20, height - 50)))
		}
	}

    //check if a zombie has been clicked
    this.checkZombieClicked = function(x, y) {
        for (var i = this.zombies.length - 1; i >= 0; i--) {
            if (this.zombies[i].clicked(x, y)) {
                this.zombies[i].health -= 10;
            }
            if (this.zombies[i].health <= 0) {
                this.zombies.splice(i, 1);
                this.addZombies(1);
            }
        }
    }

}