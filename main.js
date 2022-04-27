Webcam.set({
    width:360,
    height:350,
    Image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

webacm.attach (  '#camera' );

Webacm.snap(data_uri) {
    document.getElementById("result").innerHtml = '<img id="captured_image" src="'+data_uri+'"/>';
 });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachabalemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

function check() 
{
    img = document.getElementById('captured image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    } else {
       console.log(results);
       document.getElementById("result_object_name").innerHtml = results[0].label;
       document.getElementById("result_object_name").innerHtml = results[0].toFixed(3);
    }
}