function home()
{
    window.location = "index.html";
}

img = "";
status = "";

function preload()
{
    img = loadImage("bed.png");
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
    fill("#6C6960");
    text("BED" , 150, 220);
    textSize(20);
    textStyle(BOLD);
    noFill();
    stroke("#9C9C9C");
    rect(110, 200, 380, 200);

    
}

function gotresults(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}