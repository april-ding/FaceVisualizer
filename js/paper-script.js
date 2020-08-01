// var face = new Path('M344,4.51c-99.39,24-168,40-216,86s-94,79-92,153-43,99-35,184,95,142,193,144,359-103,413-80,115-54,54-126-17-78-21-153S485-29.49,344,4.51Z');
// face.position = view.center;
// face.fillColor = '#EF9050';
var circle = new Path.Circle(new Point(view.center), 200);
circle.fillColor = '#80BC9B';
var points = 4;

var mouth = new Shape.Ellipse({
    point: view.center - 20 + new Point(0, 80),
    size: [40, 20],
    fillColor: 'black'
});
var eye1 = new Path.Circle(new Point(view.center + {
    x:90,
    y: -50
}), 50);
var iris1 = new Path.Circle(new Point(view.center + {
    x:70,
    y: -50
}), 30);
var eye2 = new Path.Circle(new Point(view.center + {
    x: -90,
    y: -50
}), 50);
var iris2 = new Path.Circle(new Point(view.center + {
    x: -70,
    y: -50
}), 30);
eye1.fillColor = 'white';
eye2.fillColor = 'white';
iris1.fillColor = 'black';
iris2.fillColor = 'black';

var pathHeight = 0.5;
initializePath();

function initializePath() {

}

function onMouseMove(event) {
}
// Create a copy of the path and move it 100pt to the right:
function onFrame(event) {
    if(vol>0){
            //face.segments[0].point.y += vol*5;
        mouth.size =[40, 20+vol*400];
    }
    console.log(vol);

    for(var i = 1; i < points; i++){
        var sinSeed = event.count + (i + i % 10 * 100);
        var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
        if(vol == null || vol == 0 || vol == undefined){
            var xPos = Math.sin(sinSeed / 100) * sinHeight;
    		var yPos = Math.sin(sinSeed / 100) * sinHeight;
        }
        if(vol > 0){
            var xPos = Math.sin(sinSeed / 100) * sinHeight + vol*2;
    		var yPos = Math.sin(sinSeed / 100) * sinHeight + vol*2;
        }

        circle.segments[0].point.x += (xPos/2);
		circle.segments[1].point.y += (yPos/2);
        circle.segments[2].point.x += (xPos/2);
        circle.segments[3].point.y += (yPos/4);
    }

    // Smooth the segments of the copy:
    circle.smooth();

    // Select the path, so we can see its handles:
    //circle.fullySelected = true;


}

function onResize(event) {
    // Whenever the window is resized, recenter the path:
    //path.position = view.center;
}
