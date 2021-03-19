Webcam.set({
    width:300,
    height: 250,
    image_format: 'png',
    image_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'/>";
    });
}
console.log("ml5: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gYIo6gKWI/model.json", modelLoaded);

function modelLoaded() {
    console.log("Ml5 model has been loaded!");
}