prediction_1="";
Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2INdBoZXd/',modelLoaded);
function modelLoaded() {
    console.log('modelLoaded');
}
function check() {
img=document.getElementById('captured_image');
classifier.classifiy(img,gotResult);
}
function gotResult(error,results) {

    if(results[0].label=="Raised hand gesture"){
        document.getElementById("icon_of_hg").innerHTML="&#9995;";
    }
    if(results[0].label=="Clapping hand gesture"){
        document.getElementById("icon_of_hg").innerHTML="&#128079;";
    }
    if(results[0].label=="Thumbs up hand gesture"){
        document.getElementById("icon_of_hg").innerHTML="&#128077;";
    }
}

function speak() {
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is" + prediction_1;
    var utterThis=new SpeechSynthesisUtterance (speak_data_1);
    synth.speak(utterThis);
};