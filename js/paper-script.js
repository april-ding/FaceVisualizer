var path = new Path();
var mousePos = view.center/2;
path.strokeColor = 'black';
path.fillColor='#EF9050';
initializePath();

function initializePath(){

	path.add(new Point(mousePos)  + {x:30, y:85});
	path.add(new Point(mousePos)  + {x:30, y:25});
	path.add(new Point(mousePos)  + {x:80, y:25});
	path.add(new Point(mousePos)  + {x:80, y:75});
	path.closed = true;
}

function onMouseMove(event) {
	mousePos = event.point;


}
// Create a copy of the path and move it 100pt to the right:
function onFrame(event) {

	if(path.segments[0].point.x != mousePos.x){
		if(path.segments[0].point.x < mousePos.x){
			path.segments[0].point.x += 1;
		}else if(path.segments[0].point.x > mousePos.x){
			path.segments[0].point.x -= 1;
		}
	}else if(path.segments[0].point.y != mousePos.y){
		if(path.segments[0].point.y < mousePos.y){
			path.segments[0].point.y += 1;
		}else if(path.segments[0].point.y > mousePos.y){
			path.segments[0].point.y -= 1;
		}
	}


// Smooth the segments of the copy:
 path.smooth();

// Select the path, so we can see its handles:
	path.fullySelected = true;

    // var myCircle = new Path.Circle({
	// 	center: view.center,
	// 	radius: vol * 200;
	// });
	// myCircle.strokeColor = 'black';
	// myCircle.fillColor = 'white';

}

function onResize(event) {
	// Whenever the window is resized, recenter the path:
	path.position = view.center;
}
