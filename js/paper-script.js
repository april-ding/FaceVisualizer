// var face = new Path('M344,4.51c-99.39,24-168,40-216,86s-94,79-92,153-43,99-35,184,95,142,193,144,359-103,413-80,115-54,54-126-17-78-21-153S485-29.49,344,4.51Z');
// face.position = view.center;
// face.fillColor = '#EF9050';
var circleSize = 200;

var circle = new Path.Circle(new Point(view.center), circleSize);
circle.fillColor = '#80BC9B';
circle.strokeWeight = 7;
var circleDir = 1;


var points = 4;

var mouth = new Shape.Ellipse({
    point: view.center - 20 + new Point(0, 80),
    size: [40, 20],
    fillColor: 'black'
});

var eye1 = new Path.Circle(new Point(view.center + {
    x: 90,
    y: -50
}), circleSize/4);
var iris1 = new Path.Circle(new Point(view.center + {
    x: 90,
    y: -50
}), circleSize*0.15);
var eye2 = new Path.Circle(new Point(view.center + {
    x: -90,
    y: -50
}), circleSize/4);
var iris2 = new Path.Circle(new Point(view.center + {
    x: -90,
    y: -50
}), circleSize*0.15);
eye1.fillColor = 'white';
eye2.fillColor = 'white';
iris1.fillColor = 'black';
iris2.fillColor = 'black';

var dir = 1;
var pathHeight = 0.5;

var startPop = false;
var circlePopped = false;


initializePath();

function initializePath() {

}

function onMouseMove(event) {}

function onFrame(event) {
    if (vol > 0) {
        mouth.size = [40, 20 + vol * 400];

        if (iris1.position.x >= view.center.x + 90 + 20 || iris1.position.x <= view.center.x + 90 - 20) {
            dir *= -1;
        }
        iris1.position.x += vol * 10 * dir;
        iris2.position.x += vol * 10 * dir;

    }

    //pop the face
    if (!circlePopped) {

        if (vol * 150 > 100) {
            startPop = true;
        }
        if (startPop) {
            for (var i = 0; i < points; i++) {
                circle.segments[i].point = view.center;
            }
            circle.flatten(200);
            circlePopped = true;
        }

    }
    if (!startPop && !circlePopped) {
        for (var i = 0; i < points; i++) {
            var sinSeed = event.count + (i + i % 10 * 100);
            var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
            if (vol == null || vol == 0 || vol == undefined) {
                var xPos = Math.sin(sinSeed / 100) * sinHeight;
                var yPos = Math.sin(sinSeed / 100) * sinHeight;
            }
            if (vol > 0) {
                var xPos = Math.sin(sinSeed / 100) * sinHeight + vol * 8;
                var yPos = Math.sin(sinSeed / 100) * sinHeight + vol * 8;
            }

            if (circle.position.x >= view.center.x + 100 || circle.position.x <= view.center.x - 100) {
                circleDir *= -1;
            }

            circle.segments[0].point.x += xPos / 2 * circleDir;
            circle.segments[1].point.y += yPos / 2 * circleDir;
            circle.segments[2].point.x += xPos / 2 * circleDir;
            circle.segments[3].point.y += yPos / 2 * circleDir;

        }

        // Smooth the segments of the copy:
        //face.smooth();
    }

    // Select the path, so we can see its handles:
    //circle.fullySelected = true;

}

function onResize(event) {

}
