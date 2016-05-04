'use strict';

function InteractivePerf() {
    this._recording = false;
    this._startTime = window.performance.now();
    this._results = [];
}

InteractivePerf.prototype.toggleRecording = function() {
    if (this._recording) {
        this.stopRecording();
    } else {
        this.startRecording();
    }
}

InteractivePerf.prototype.startRecording = function() {
    this._recording = true;
}

InteractivePerf.prototype.stopRecording = function() {
    this._recording = false;
    if (!this._results.length) {
        console.log('Finished recording with no results');
    } else {
        var averageDuration = this._results.reduce(function(sum, value) {
            return sum + value;
        }, 0) / this._results.length;
        console.log('Average duration: ' + InteractivePerf.formatDuration(averageDuration));
        console.log('Average FPS: ' + (1000 / averageDuration).toFixed(2));
        console.log('Number of samples: ' + this._results.length);
    }
    this._clearResults();
}

InteractivePerf.prototype.begin = function() {
    this._startTime = window.performance.now();
}

InteractivePerf.prototype.end = function(message) {
    var endTime = window.performance.now();
    var duration = endTime - this._startTime;

    if (message) {
        console.log(message + ': ' + InteractivePerf.formatDuration(duration));
    } else if (!this._recording) {
        console.debug('Unrecorded: ' + InteractivePerf.formatDuration(duration));
    }
    if (this._recording) {
        this._results.push(duration);
    }
}

InteractivePerf.formatDuration = function(duration) {
    if (duration < 1000) {
        return duration + ' ms';
    } else {
        return (duration / 1000).toFixed(2) + ' seconds';
    }
}

InteractivePerf.prototype._clearResults = function() {
    this._recording = false;
    this._results = [];
}
