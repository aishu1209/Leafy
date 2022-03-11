



camera = document.getElementById("camera");
Webcam.attach(camera);

//alert(camera);

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90                                                   

});

function back(){
    window.location = "index.html";
    
}


