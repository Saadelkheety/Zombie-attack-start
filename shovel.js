// constructor for the shovel

function Shovel() {
    //draw the shovel to the screen
    this.draw = function() {
        push();
        fill(139, 69, 19);
        rectMode(CENTER);
        rect(mouseX, mouseY+15, 10, 50, 10);
        rect(mouseX, mouseY, 30, 30, 10);
        pop();
    }
}