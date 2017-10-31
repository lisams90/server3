/*
 * @name Animation
 * @description The circle moves.
 */
// Where is the circle

var x; // y, z
var cres, r, g, b,rSlider;
var pres=0;

function setup() {
  var width = 255
  var height =255
  createCanvas(width, height);
  textSize(20);
  rSlider = createSlider(0, 255, 0);
  rSlider.position(40, 20);
}

function draw() {

  cres = rSlider.value();
  background(x/4);
  text("x="+x, 10, 30); //+" y="+y+" z="+z,
  text(cres, rSlider.x * 2 + rSlider.width, 35);
  // if (cres!=pres){
  //   console.log(cres)
  //   sendSlider()
  //   pres=cres
  // }
  stroke(50);
  fill(50);
  
  ellipse(x/4, x/4, 20, 20);

}

