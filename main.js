function startClassification()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TtAF4lM5x/model.json',{probabilityThreshold:0.7},modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog=0;
var cat=0;
var cow=0;
var lion=0;

function gotResults(error,results){
    if (error){
    console.log(error);
    }
    else {
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
     
    document.getElementById("result_label").innerHTML='Detected voice is of '+results[0].label;
    document.getElementById("result_confidence").innerHTML='Detected Dog-'+dog+'Detected Cat-'+cat+'Detected Cow-'+cow+'Detected Lion-'+lion;
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img=document.getElementById('animal_image');

if (results[0].label == "Meowing"){
img.src='cat_image.gif';
}
else if (results[0].label == "Mooing"){
    img.src='cow_image.gif';
    }
    else if (results[0].label == "Barking"){
        img.src='dog_image.gif';
    }
        else if (results[0].label == "Roar"){
            img.src='lion_image.gif';
            }
            else {
             img.src='listen.gif';
            }

    }
}