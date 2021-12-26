function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3pmIHvtmf/model.json',modelReady);
}

function modelReady()
 {
     classifier.classify(gotResults);
}
 
function gotResults(error,results)
{
    if(error){
        console.error(error);
    }else {
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img= document.getElementById('alien1');
        img1= document.getElementById('alien2');
        img2= document.getElementById('alien3');
        img3= document.getElementById('alien4');
        img4= document.getElementById('alien5');
    

        if(results[0].label=="chirp"){
            img.src='birdimg.png';
        }else if(results[0].label=="meow"){
            img1.src='catimg.png';
        }else if(results[0].label=="barking"){
            img2.src='dog-img.png';
        }else if(results[0].label=="roar"){
            img3.src='lionimg.png';
        }else{
            img4.src='earimg.png';
        }
    }
}