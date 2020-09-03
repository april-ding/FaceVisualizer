// ==================
// Global Variables
// ==================
// COLORS
var color_purple = '#725fa2';

// LANDING VARIABLES
var landing_body, landing_left_eye, landing_right_eye, landing_left_arm, landing_right_arm, landing_mouth;

var dir = 1;

// ==================
// Initialization
// ==================
initial();


// ==================
// Function Declarations
// ==================
function initial(){
    landing();
}

function landing() {
    landing_body = project.importSVG(document.getElementById('landingBody'), function() {
        landingBody.style.display = 'none';
    })
    landing_body.position = view.center;

    landing_left_eye = project.importSVG(document.getElementById('landingLeftEye'), function() {
        landingLeftEye.style.display = 'none';
    })
    landing_left_eye.position = new Point(view.center.x-30, view.center.y-67);

    landing_right_eye = project.importSVG(document.getElementById('landingRightEye'), function() {
        landingRightEye.style.display = 'none';
    })
    landing_right_eye.position = new Point(view.center.x+35, view.center.y-67);

    landing_left_arm = project.importSVG(document.getElementById('landingLeftArm'), function() {
        landingLeftArm.style.display = 'none';
    })
    landing_left_arm.pivot = landing_left_arm.bounds.bottomRight;
    landing_left_arm.position = new Point(view.center.x-120, view.center.y-20);

    landing_right_arm = project.importSVG(document.getElementById('landingRightArm'), function() {
        landingRightArm.style.display = 'none';
    })
    landing_right_arm.pivot = landing_right_arm.bounds.bottomLeft;
    landing_right_arm.position = new Point(view.center.x+125, view.center.y-20);

    landing_mouth = new Shape.Ellipse({
        point: view.center + new Point(-10, -40),
        size: [20, 10],
        fillColor: 'black'
    });

}

function onFrame(event) {
    //landing
    if(landing_left_eye.position.x >= view.center.x-25 || landing_left_eye.position.x <= view.center.x-40){
        dir *= -1;
    }
    landing_left_eye.position.x += 0.2*dir;
    landing_right_eye.position.x += 0.2*dir;
    landing_left_arm.rotate(0.2*dir);
    landing_right_arm.rotate(-0.2*dir);
    landing_mouth.size += 0.3*dir;
}

function onResize(event) {
    // Whenever the window is resized, recenter the path:

}
