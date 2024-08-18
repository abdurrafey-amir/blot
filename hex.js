

const width = 180;
const height = 180;

setDocDimensions(width, height);
const t = new bt.Turtle()

t.jump([90, 50])
t.left(90)
t.forward(67.5)
t.right(45)
t.forward(30)
t.left(90)
t.forward(30)
t.left(90)
t.forward(30)
t.left(90)
t.forward(30)
t.right(45)

t.jump([90, 50])
// t.left(-90)
// t.forward(70)
t.right(-45)
t.forward(30)
t.left(-90)
t.forward(30)
t.left(-90)
t.forward(30)
t.left(-90)
t.forward(30)
t.left(45)

t.jump([90, 85])
t.left(90)
t.forward(35)
t.right(-45)
t.forward(30)
t.left(-90)
t.forward(30)
t.left(-90)
t.forward(30)
t.left(-90)
t.forward(30)
t.left(45)

t.jump([90, 85])
t.forward(30)
t.right(45)
t.forward(30)
t.left(90)
t.forward(30)
t.left(90)
t.forward(30)
t.left(90)
t.forward(30)
t.left(45)

t.jump([90, 85])
t.left(45)
t.forward(55)
t.right(45)
t.forward(30)
t.left(90)
t.forward(30)
t.left(90)
t.forward(30)
t.left(90)
t.forward(30)
t.left(45)
t.right(90)

t.jump([90, 85])

t.forward(58)
t.right(45)
t.forward(30)
t.left(90)
t.forward(30)
t.left(90)
t.forward(30)
t.left(90)
t.forward(30)
t.left(45)
t.right(90)


t.jump([90, 85])
t.left(90)
t.forward(55)
t.right(45)
t.forward(30)
t.left(90)
t.forward(30)
t.left(90)
t.forward(30)
t.left(90)
t.forward(30)
t.left(45)
t.right(90)


t.jump([90, 85])

t.forward(58)
t.right(45)
t.forward(30)
t.left(90)
t.forward(30)
t.left(90)
t.forward(30)
t.left(90)
t.forward(30)
t.left(45)
t.right(90)

t.jump([145, 85])
t.left(45)
for (let i = 0; i < 360; i++) {
  t.forward(1);
  t.left(1);
}



drawLines(t.lines())