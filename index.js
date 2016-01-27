var audioContext = new window.AudioContext();

var BUTTON_SIZE = 25;
var STEP_EVERY = 100;

function noise(frequency, startGain, endGain, duration) {
  var startTime = audioContext.currentTime;
  var stopTime = startTime + duration;

	var bufferSize = audioContext.sampleRate * duration;
  var noise = audioContext.createBufferSource();
  noise.buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  noise.buffer.getChannelData(0)
    .forEach(function(_, i, output) { output[i] = Math.random() * 2 - 1; });

	var noiseFilter = audioContext.createBiquadFilter();
	noiseFilter.type = 'highpass';
	noiseFilter.frequency.value = frequency;

  var noiseEnvelope = audioContext.createGain();
  decay(noiseEnvelope.gain, startGain, endGain, startTime, stopTime);
  chain([noise, noiseFilter, noiseEnvelope, audioContext.destination]);

	noise.start(startTime);
	noise.stop(stopTime);
};

function chain(items) {
  for (var i = 0; i < items.length - 1; i++) {
    items[i].connect(items[i + 1]);
  }
};

function decay(item, start, end, startTime, stopTime) {
	item.setValueAtTime(start, startTime);
	item.exponentialRampToValueAtTime(end, stopTime);
};

function oscillator(type, startFreq, endFreq, startGain, endGain, duration) {
  var startTime = audioContext.currentTime;
  var stopTime = startTime + duration;

  var oscillator = audioContext.createOscillator();
  oscillator.type = type;
  decay(oscillator.frequency, startFreq, endFreq, startTime, stopTime);

  var gain = audioContext.createGain();
  decay(gain.gain, startGain, endGain, startTime, stopTime);

  chain([oscillator, gain, audioContext.destination]);

	oscillator.start(startTime);
	oscillator.stop(stopTime);
};

function isPointInsideRectangle(p, r) {
  return !(p.x < r.x ||
           p.y < r.y ||
           p.x > r.x + BUTTON_SIZE ||
           p.y > r.y + BUTTON_SIZE);
};

var latestClick = (function() {
  var latestClick;
  var mouseDown = false;

  window.addEventListener("mousedown", function(e) {
    if (!mouseDown) {
      latestClick = { x: e.clientX, y: e.clientY };
    }

    mouseDown = true;
  });

  window.addEventListener("mousedown", function() {
    mouseDown = false;
  });

  return function() {
    var latestClick_ = latestClick;
    latestClick = undefined;
    return latestClick_;
  };
})();

function buttonPosition(column, row) {
  return {
    x: BUTTON_SIZE / 2 + column * BUTTON_SIZE * 1.5,
    y: BUTTON_SIZE / 2 + row * BUTTON_SIZE * 1.5
  };
};

function createTrack(play) {
  var steps = [];
  for (var i = 0; i < 16; i++) {
    steps.push(false);
  }

  return { steps: steps, play: play };
};

function update(data) {
  var click = latestClick();

  for (var row = 0; row < data.tracks.length; row++) {
    for (var column = 0; column < data.tracks[row].steps.length; column++) {
      if (click && isPointInsideRectangle(click, buttonPosition(column, row))) {
        data.tracks[row].steps[column] = !data.tracks[row].steps[column];
      }
    }
  }

  if (data.lastStepTime + STEP_EVERY < Date.now()) {
    data.iStep = (data.iStep + 1) % data.tracks[0].steps.length;
    data.lastStepTime = Date.now();

    data.tracks
      .filter(function(track) { return track.steps[data.iStep]; })
      .forEach(function(track) { track.play(); })
  }
};

function draw(screen, data) {
  screen.clearRect(0, 0, screen.canvas.width, screen.canvas.height);

  data.tracks.forEach(function(track, row) {
    data.tracks[row].steps.forEach(function(on, column) {
      var position = buttonPosition(column, row);
      screen.fillStyle = on ? "gold" : "lightgray";
      screen.fillRect(position.x, position.y, BUTTON_SIZE, BUTTON_SIZE);
    });
  });

  var position = buttonPosition(data.iStep, data.tracks.length);
  screen.fillStyle = "deeppink";
  screen.fillRect(position.x, position.y, BUTTON_SIZE, BUTTON_SIZE / 8);
};

function kick() {
  oscillator("sine", 100, 0.01, 1, 0.01, 0.5);
};

function snare() {
  noise(5000, 0.4, 0.01, 0.3);
  oscillator("triangle", 150, 0.01, 0.7, 0.01, 0.2);
};

function highHat() {
  noise(10000, 0.2, 0.01, 0.3);
};

var data = {
  tracks: [createTrack(kick), createTrack(snare), createTrack(highHat)],
  iStep: 0,
  lastStepTime: Date.now()
};

data.tracks[2].steps[4] = true;

var screen = document.getElementById("screen").getContext("2d");

(function tick() {
  update(data);
  draw(screen, data);
  requestAnimationFrame(tick);
})();
