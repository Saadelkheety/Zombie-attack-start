//constructor for the Zombies
function zombie(y) {
	//initial x so all zombies start to the left of the screen
	this.x = -10;
	this.y = y;
	//set a random speed
	this.speed = random(0.1, 0.9);

    //health property
    this.health = 100;

	//draw the zombie to the screen
	this.draw = function() {
		push();
		//arms
		fill(128, 0, 128);
		rect(this.x - 10, this.y - 50, 65, 15);
		rect(this.x - 10, this.y + 35, 65, 15);
		//shoulders
		rect(this.x - 20, this.y - 50, 35, 100, 10);
		//head
		fill(50);
		ellipse(this.x, this.y, 50);
        // health bar
        fill(255, 0, 0);
        rect(this.x - 25, this.y-20, 50, 5);
        fill(0, 255, 0);
        rect(this.x - 25, this.y-20, this.health/2, 5);

		pop();
	}

	//update the zombies x location as it lumbers across the screen
	this.updateLocation = function() {
		this.x += this.speed;
	}

    //check if the game is over
    this.gameOver = function() {
        if (this.x > width) {
            console.log("Game Over");
            return true;
        } else {
            return false;
        }
    }

    //check if the zombie has been clicked
    this.clicked = function(x, y) {
        var d = dist(x, y, this.x, this.y);
        if (d < 50) {
            return true;
        } else {
            return false;
        }
    }
}