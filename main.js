lwX = 0;
lwY = 0;
rwX = 0;
rwY = 0;
lwS = 0;
stat1 = "";
stat2 = "";

var song1 = "";
var song2 = "";

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music_2.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function draw()
{
    image(video, 0, 0, 600, 500);
    stat1 = song1.isPlaying();
    console.log(stat1);
    fill("#FF0000");
    stroke("#FF0000");

    if (lwS > 0.2)
    {
        circle(lwX, lwY, 50);
        song2.stop();
        if(stat1 == false)
        {
            song1.play();
            document.getElementById("song_name").innerHTML = "Nice tune";
        }
    }
}
function modelLoaded()
{
    console.log("PoseNet Model Has Been Loaded!")
}
function gotPoses(results, error)
{
    if (error)
    {
        console.error(error);
    }
    if(results.length>0)
    {
        lwS = results[0].pose.keypoints[9].score;

        lwX = results[0].pose.leftWrist.x
        lwY = results[0].pose.leftWrist.y
        rwX = results[0].pose.rightWrist.x
        rwY = results[0].pose.rightWrist.y
        console.log("Left Wrist Coordinates: "+lwX+", "+lwY);
        console.log("Right Wrist Coordinates: "+rwX+", "+rwY);
    }
}