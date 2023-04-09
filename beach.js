function home()
{
    window.location = "index.html";
}

img = "";
status = "";

function preload()
{
    img = loadImage("beach.png");
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
    fill("#B2FFFF");
    text("BEACH" , 90, 65);
    textSize(20);
    textStyle(BOLD);
    noFill();
    stroke("#000000");
    rect(30, 30, 600, 370);

}

function gotresults(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}