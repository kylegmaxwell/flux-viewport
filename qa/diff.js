'use strict';

function DiffUtils (container, downloadInput, imageCanvas, diffCanvas, imageSelector, jsonSelector, viewMenu) {
    this._downloadInput = downloadInput;
    this._imageCanvas = imageCanvas;
    this._diffCanvas = diffCanvas;
    this._imageSelector = imageSelector;
    this._jsonSelector = jsonSelector;
    this._viewMenu = viewMenu;
    this._viewport = new FluxViewport(container);
    this._viewport.setupDefaultLighting();
    var torus = '{"origin": [0,0,0],"majorRadius": 5,"minorRadius":3,"axis":[0,0,1],"primitive":"torus"}';
    this._viewport.setGeometryJson(torus);
    this._loadedImage;
}

DiffUtils.prototype.setView = function () {
    var view = FluxViewport.getViews()[this._viewMenu.value];
    this._viewport.setView(view);
};

DiffUtils.prototype.focus = function () {
    this._viewport.focus();
};

DiffUtils.prototype.downloadState = function () {
    this._viewport.downloadState(this._downloadInput.value);
};

DiffUtils.prototype._readImageUrl = function (imageUrl, canvas) {
    var img = new Image();
    var _this = this;
    img.onload = function(){
        _this._redraw(img, canvas);
    }
    img.src = imageUrl;
    return img;
};

DiffUtils.prototype._redraw = function (img, canvas) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img,0,0);
};

DiffUtils.prototype._readImageFile = function (imageFile) {
    var reader = new FileReader();
    reader.onloadend = this._handleImageFileRead.bind(this);
    reader.readAsDataURL(imageFile);
};

DiffUtils.prototype.diffImageChanged = function () {
    if (this._imageSelector.files.length === 0) return;
    this._readImageFile(this._imageSelector.files[0]);
};

DiffUtils.prototype.jsonGeomChanged = function () {
    if (this._jsonSelector.files.length === 0) return;
    var selectedFile = this._jsonSelector.files[0];

    var reader = new FileReader();
    reader.onloadend = this._handleTextFileRead.bind(this);
    reader.readAsText(selectedFile);
};

DiffUtils.prototype._handleImageFileRead = function (event) {
    this._loadedImage = this._readImageUrl(event.target.result, this._imageCanvas);
};

DiffUtils.prototype._handleTextFileRead = function (event) {
    var content = event.target.result;
    var result = event.target.result;
    var _this = this;
    // Check if the input is viewport state or otherwise just flux entities
    if (result.indexOf('entities')!==-1) {
        this._viewport.fromJSON(JSON.parse(result)).then(function () {
            _this._viewport.render();
        });
    } else {
        this._viewport.setGeometryJson(result).then(function () {
            _this.focus();
        });
    }
    this._viewport.render();
};

DiffUtils.prototype.getDownloadString = function () {
    var downloadString = this._downloadInput.value;
    if (downloadString.search(/\.png$/)===-1) {
       downloadString+='.png';
    }
    return downloadString;
};

DiffUtils.prototype.diffImages = function () {
    var DIFF_THRESHOLD = 1; // 1% variance in the image
    var file1 = this._viewport.getGlCanvas().toDataURL();
    var file2 = this._imageCanvas.toDataURL();
    var _this = this;
    var diff = resemble(file1).compareTo(file2).onComplete(function(data){
        diffResults.textContent = data.rawMisMatchPercentage;
        if (data.rawMisMatchPercentage > 1) {
            diffContainer.style.backgroundColor = '#FFCCCC';// Red - error
        } else {
            diffContainer.style.backgroundColor = '#CCFFCC';// Green - ok
        }
        _this._readImageUrl(data.getImageDataUrl(), _this._diffCanvas);
    });
};
