const turtle = new bt.Turtle();

// Draw a flower

for (let i = 0; i < 36; i++) {
    turtle.forward(100);
    turtle.right(45);
    turtle.forward(50);
    turtle.right(90);
    turtle.forward(50);
    turtle.right(45);
    turtle.forward(100);
    turtle.right(100);
}

// Move turtle to a new position
turtle.up();
turtle.goTo([200, 200]);
turtle.down();

// Draw a square

for (let i = 0; i < 4; i++) {
    turtle.forward(100);
    turtle.right(90);
}

// Move turtle to a new position
turtle.up();
turtle.goTo([400, 200]);
turtle.down();

// Draw a triangle

for (let i = 0; i < 3; i++) {
    turtle.forward(100);
    turtle.right(120);
}

// Draw a hexagon
turtle.up();
turtle.goTo([600, 200]);
turtle.down();

for (let i = 0; i < 6; i++) {
    turtle.forward(100);
    turtle.right(60);
}

// Draw a pentagon
turtle.up();
turtle.goTo([800, 200]);
turtle.down();

for (let i = 0; i < 5; i++) {
    turtle.forward(100);
    turtle.right(72);
}

// Move turtle to a new position
turtle.up();
turtle.goTo([200, 400]);
turtle.down();

// Draw a circle
const radius = 50;
const circumference = 2 * Math.PI * radius;
const sides = 100;
const angle = 360 / sides;

for (let i = 0; i < sides; i++) {
    turtle.forward(circumference / sides);
    turtle.right(angle);
}

// Move turtle to a new position
turtle.up();
turtle.goTo([400, 400]);
turtle.down();

// Draw a star
const starSize = 100;

for (let i = 0; i < 5; i++) {
    turtle.forward(starSize);
    turtle.right(144);
}

// Move turtle to a new position
turtle.up();
turtle.goTo([600, 400]);
turtle.down();

// Draw a spiral
var spiralSize = 5;
const spiralAngle = 30;

for (let i = 0; i < 100; i++) {
    turtle.forward(spiralSize);
    turtle.right(spiralAngle);
    spiralSize += 0.5;
}

// Move turtle to a new position
turtle.up();
turtle.goTo([800, 400]);
turtle.down();

// Draw a rectangle
const rectangleWidth = 150;
const rectangleHeight = 75;

for (let i = 0; i < 2; i++) {
    turtle.forward(rectangleWidth);
    turtle.right(90);
    turtle.forward(rectangleHeight);
    turtle.right(90);
}




drawLines(turtle.lines())