

// var circle = new Path.Circle(new Point(view.center), 200);
// circle.fillColor = '#80BC9B';
// var circleDir = 1;
//
// var points = 8;
//
// var mouth = new Shape.Ellipse({
//     point: view.center - 20 + new Point(0, 80),
//     size: [40, 20],
//     fillColor: 'black'
// });

var words = project.importSVG("img/clock-1.svg");
words.visible = true; // Turn off the effect of display:none;

var dir = 1;

var pathHeight = 0.5;
initializePath();

function initializePath() {

}

function onMouseMove(event) {
}

function onFrame(event) {
    // if(vol>0){
    //     mouth.size =[40, 20+vol*400];
    //
    //     if(iris1.position.x >= view.center.x + 90 + 20 || iris1.position.x <= view.center.x + 90 - 20){
    //         dir *= -1;
    //     }
    //     iris1.position.x += vol*5*dir;
    //     iris2.position.x += vol*5*dir;
    //
    // }
    //
    // for(var i = 0; i < points; i++){
    //     var sinSeed = event.count + (i + i % 10 * 100);
    //     var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
    //     if(vol == null || vol == 0 || vol == undefined){
    //         var xPos = Math.sin(sinSeed / 100) * sinHeight;
    // 		var yPos = Math.sin(sinSeed / 100) * sinHeight;
    //     }
    //     if(vol > 0){
    //         var xPos = Math.sin(sinSeed / 100) * sinHeight + vol*4;
    // 		var yPos = Math.sin(sinSeed / 100) * sinHeight + vol*4;
    //     }
    //
    //     if(circle.position.x >= view.center.x + 100 || circle.position.x <= view.center.x - 100){
    //         circleDir *= -1;
    //     }
    //
    //     circle.segments[0].point.x += xPos/2 * circleDir;
	// 	circle.segments[1].point.y += yPos/2 * circleDir;
    //     circle.segments[2].point.x += xPos/2 * circleDir;
    //     circle.segments[3].point.y += yPos/2 * circleDir;
    // }

    // Smooth the segments of the copy:
    //face.smooth();

    // Select the path, so we can see its handles:
    //face.fullySelected = true;


}

function onResize(event) {
    // Whenever the window is resized, recenter the path:
    //path.position = view.center;
}
