
Webcam.set({
    width:350,
    height:300,
    image_formate:png ,
    png_qualety:100
});

camera=document.getElementById("live");
Webcam.attach('#live');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("capture").innerHTML='<img id="image1" src="'+data_uri+'"/>';

    });
}
console.log("ml5_version",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2HQePsI0q/model/json",model_loaded);
function model_loaded(){
    console.log("model is loaded");
}