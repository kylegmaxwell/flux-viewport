
function readImageUrl(imageUrl, canvas) {
    var img = new Image();
    img.onload = function(){
        console.log(canvas);
        redraw(img, canvas);
    }
    img.src = imageUrl;
    return img;
}

function redraw(img, canvas) {
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img,0,0);
}

var loadedImage;
function readImageFile(imageFile) {
    var reader = new FileReader();
    reader.onload = function(event){
        loadedImage = readImageUrl(event.target.result, fluxViewport.renderer.cacheCanvas);
    }
    reader.readAsDataURL(imageFile);
}

function diffImageChanged() {
    if (imageSelector.files.length === 0) return;
    readImageFile(imageSelector.files[0]);
}

function jsonGeomChanged() {
    if (jsonSelector.files.length === 0) return;
    var selectedFile = jsonSelector.files[0];
    var reader = new FileReader();
    reader.onloadend = handleFileRead;
    reader.readAsText(selectedFile);
}

function handleFileRead(e) {
    var content = e.target.result;
    var result = e.target.result;
    fluxViewport.setGeometryJson(result);
}

function getDownloadString() {
    var downloadString = downloadInput.value;
    if (downloadString.search(/\.png$/)===-1) {
       downloadString+='.png';
    }
    return downloadString;
}

function handleDownloadClick() {
    downloadLink.href = fluxViewport.renderer.getGlCanvas().toDataURL();
    downloadLink.download = getDownloadString();
}

function diffImages() {
    var DIFF_THRESHOLD = 1; // 1% variance in the image
    var file1 = fluxViewport.renderer.getGlCanvas().toDataURL();
    var file2 = fluxViewport.renderer.cacheCanvas.toDataURL();
    var diff = resemble(file1).compareTo(file2).onComplete(function(data){
        diffResults.textContent = data.rawMisMatchPercentage;
        if (data.rawMisMatchPercentage > 1) {
            diffContainer.style.backgroundColor = '#FFCCCC';// Red - error
        } else {
            diffContainer.style.backgroundColor = '#CCFFCC';// Green - ok
        }
        readImageUrl(data.getImageDataUrl(), diffCanvas);
    });
}
