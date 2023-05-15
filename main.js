status = "";
input_text = "";

function setup()
{
    canvas = createCanvas(300,290);
    canvas.position(850,250);
    video = createCapture(VIDEO);
    video.size(300,290);
    video.hide();
}
function start()
{
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input_text = document.getElementById("input_id").value;
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}
function draw()
{
    image(video, 0, 0, 380, 290);
}