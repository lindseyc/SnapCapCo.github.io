window.onload = function init() {
    // var button = document.createElement("button");
    // button.innerHTML = "Hello";

    // var body = document.getElementsByTagName("body")[0];
    // body.appendChild(button);
}

// function takePhoto() {
//     var context = canvas.getContext('2d');
//     if (width && height) {
//       canvas.width = width;
//       canvas.height = height;
//       context.drawImage(video, 0, 0, width, height);
//
//       var data = canvas.toDataURL('image/png');
//       photo.setAttribute('src', data);
//     }
//     else
//     {
//       clearphoto();
//     }

function displayPhoto()
{
  var input = document.getElementById("picUpload").value;
  console.log("hi");
  console.log(input);
  document.getElementById("imageHolder").appendChild(input);
}
