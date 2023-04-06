img_tv = "";
img_water = "";
img_desk = "";
img_bed = "";
img_beach = "";

function preload()
{
    img_tv = loadImage("tv.png");
    img_water = loadImage("water.png");
    img_desk = loadImage("desk.png");
    img_bed = loadImage("bed.png");
    img_beach = loadImage("beach.png");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function home()
{
    window.location = "index.html";
}

function tv()
{
    window.location = "tv.html";
}

function water()
{
    window.location = "water.html";
}

function desk()
{
    window.location = "desk.html";
}
function bed()
{
    window.location = "bed.html";
}
function beach()
{
    window.location = "beach.html";
}