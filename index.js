var el = x => document.getElementById(x);
var camimg = document.getElementById('photo')

function showPicker(inputId) { el('file-input').click(); }

function showPicked(input) {
    el('upload-label').innerHTML = input.files[0].name;
    var reader = new FileReader();
    reader.onload = function (e) {
        el('image-picked').src = e.target.result;
        el('image-picked').className = '';
    }
    reader.readAsDataURL(input.files[0]);
}

function analyze() {
    //location.href='results.html';
    var uploadFiles = el('file-input').files;
    var campic = el('photo');
    console.log(uploadFiles.length);
    if (uploadFiles.length != 1) {
      if(campic == null){
        alert('Please select a file or take a photo to analyze!');
      }
      else {
        alert('Please select a file or take a photo to analyze!');

      }
     }
     else{
    // edit so that it only changes to 'analyzing...' if there is a photo
      el('analyze-button').innerHTML = 'Analyzing...';
      var xhr = new XMLHttpRequest();
      var loc = window.location
      console.log(`${loc.protocol}`);
      console.log(`${loc.hostname}`);
      console.log(`${loc.port}`);
      xhr.open('POST', `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`, true);
      xhr.onerror = function() {alert (xhr.responseText);}
      xhr.onload = function(e) {
          if (this.readyState === 4) {
              var response = JSON.parse(e.target.responseText);
              el('result-label').innerHTML = `Result = ${response['result']}`;
          }
          el('analyze-button').innerHTML = 'Analyze';
      }

      var fileData = new FormData();
      fileData.append('file', uploadFiles[0]);
      xhr.send(fileData);
  }
}