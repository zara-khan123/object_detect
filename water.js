function home()
{
    window.location = "index.html";
}

img = "";
status = "";

function preload()
{
    img = loadImage("water.png");
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
    fill("#84C3BE");
    text("WATER BOTTLE" , 110, 50);
    textSize(20);
    textStyle(BOLD);
    noFill();
    stroke("#000000");
    rect(110, 30, 350, 380);

   
}

function gotresults(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}