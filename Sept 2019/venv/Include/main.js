let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let map = canvas.getContext('2d');  //game map test

let river = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

function ElementPosition() {
  this.landXPos = 0;
  this.landYPos = 0;
  this.riverXPos = 0;
  this.riverYPos = 0;
}

function draw() {

	ctx.clearRect(0, 0, width, height);

	map.fillStyle = 'green';
	map.fillRect(x, y, 900, 500);

  	river.fillStyle= 'blue';
 	river.fillRect(x,y + 300, 900, 100);

	ctx.fillStyle = 'red';
	ctx.fillRect(window.innerWidth/2, window.innerHeight/2, 15, 30);

	requestAnimationFrame(draw);
}

function checkMapShift() {
	if(x > window.innerWidth - 50){

  }
}

draw();
checkMapShift(x);

setInterval(function() {
	if(activeKeys.ArrowLeft)
  	x++;
  else if(activeKeys.ArrowRight)
  	x--;
  if(activeKeys.ArrowUp)
  	y++;
  else if(activeKeys.ArrowDown)
  	y--;
}, 10);

let activeKeys = {
	'ArrowLeft': false,
  'ArrowRight': false,
  'ArrowUp': false,
  'ArrowDown': false
};
document.addEventListener('keydown', function(event) {
  activeKeys[event.key] = true;
});
document.addEventListener('keyup', function(event) {
  activeKeys[event.key] = false;
});
