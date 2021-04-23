function setup(){
    canvas = createCanvas(300 , 300);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/a-Iv6W-6Z/model.json' , modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded!!");
}

function draw(){
    image(camera , 0 , 0 , 300 , 300);
    classifier.classify(camera , gotResult);
}

function gotResult(error , result){
    if(error){
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("obj_name").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}