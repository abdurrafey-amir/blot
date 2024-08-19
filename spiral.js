const width = 200
const height = 200

setDocDimensions(width, height);

const t = new bt.Turtle()

///t.jump([100, 100])

///for (let i = 0; i < 90; i++) {
///t.forward(1);
///t.left(1);
/// } 

///t.jump([100, 100])
///t.right(90)
///for (let i = 0; i < 80; i++) {
/// t.forward(1);
/// t.left(1.5);
///}


///t.jump([100, 100])
///t.right(120)
///for (let i = 0; i < 75; i++) {
///  t.forward(1);
 /// t.left(2);
///}


///t.jump([100, 100])
///t.right(250)
///for (let i = 0; i < 75; i++) {
///  t.forward(1);
 /// t.left(2);
///}


t.jump([100, 100])
for (let i = 0; i < 75; i++) {
  t.forward(1);
  t.left(2);

  t.jump([100, 100])
  t.right(120)
  for (let i = 0; i < 75; i++) {
    t.forward(1);
    t.left(2);
  }
}




drawLines(t.lines())