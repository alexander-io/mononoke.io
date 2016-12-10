// The amount of circles we want to make:
var count = 50;
var random;
// Create a symbol, which we will use to place instances of later:
var path = new Path.Circle({
	center: [0, 0],
	radius: 10,
	// fillColor: 'white',
  // fillColor: 'grey',
	fillColor: 	'#FFD700',
	// fillColor: 'black',
	// strokeColor: 'grey'
	strokeColor: '#FFD700',
	// strokeColor: 'black',
	// opacity: 0.20
});
// for (var i = 0; i < 100; i++) {
// 	console.log(Math.random());
// }


var symbol = new Symbol(path);

// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
	// The center position is a random point in the view:
	var center = Point.random() * view.size + 500;
	var placedSymbol = symbol.place(center);
	placedSymbol.scale(i / count);
}
// console.log(item.bounds.width)
// The onFrame function is called up to 60 times a second:
function onFrame(event) {
	// Run through the active layer's children list and change
	// the position of the placed symbols:
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];
    // console.log(item.bounds.width)
		// Move the item 1/20th of its width to the right. This way
		// larger circles move faster than smaller circles:
		// item.position.y -= item.bounds.height / 30;
		// item.position.x -=item.bounds.height / 30;
		// item.position.y -= item.bounds.height/2 ;
		// item.position.x -=item.bounds.height/2 ;
		// item.position.y -= item.bounds.height/3 ;
		// item.position.x -=item.bounds.height/3 ;

		// item.position.y -= item.bounds.height/8 ;
		// item.position.x -=item.bounds.height/8 ;
		item.position.y -= item.bounds.height/16 ;
		item.position.x -=item.bounds.height/16 ;

		// item.position.y -= item.bounds.height;
		// item.position.x -=item.bounds.height;

		// If the item has left the view on the right, move it back
		// to the left:
    // console.log(item.bounds.left)
    // console.log(view.size.width)
		// if (item.bounds.left > view.size.width) {
    // // if (item.bounds.left < 10) {
		// 	item.position.x = -item.bounds.width;
		// }

    // if (item.position.x < 50){
    //   item.position.x = 1200;
    // }


		if (item.position.y < -10){
			// item.position.y = 120;
			// console.log("width : " + view.size._width)
			// console.log("height : " + view.size._height)
			// item.position.y = 1000;

			random = Math.random()*10;
			// item.position.y = view.size._height + random;
			item.position.y = view.size._height /2;
			// item.position.x = 1000;
			random = Math.random()*2000;
			item.position.x = view.size._width + random;
		}
    // console.log(item.position.y)

    // if (item.bounds.right > view.size.width) {
		// 	item.position.x = item.bounds.width;
		// }
	}
}
