function home()
{
    window.location = "index.html";
}

img = "";
status = "";

function preload()
{
    img = loadImage("desk.png");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: detecting object";
}

function modelLoaded()
{
    console.log("model Loaded");
    status = true;
    objectDetector.detect(img, gotresults);
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#9CD3DB");
    text("DESK" , 90, 75);
    textSize(20);
    textStyle(BOLD);
    noFill();
    stroke("#000000");
    rect(80, 60, 450, 350);

    
}

function gotresults(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}