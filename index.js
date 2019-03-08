window.onload = function init() {
    // var button = document.createElement("button");
    // button.innerHTML = "Hello";

    // var body = document.getElementsByTagName("body")[0];
    // body.appendChild(button);
}

function takePhoto()
{
    console.log("we're here fam");
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');

    // Trigger photo take
    document.getElementById("snap").addEventListener("click", function() {
        context.drawImage(video, 0, 0, 640, 480);
    });
}