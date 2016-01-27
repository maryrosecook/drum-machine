var audio = new window.AudioContext();

var BUTTON_SIZE = 25;
var STEP_EVERY = 100;

function createFilter(type, frequency) {
	var filter = audio.createBiquadFilter();
	filter.type = type;
	filter.frequency.value = frequency;
  return filter;
};

function createGain(start, end, time) {
  var gain = audio.createGain();
  decay(gain.gain, start, end, time);
  return gain;
};

function createNoise(time) {
  var noise = audio.createBufferSource();
  noise.buffer = audio.createBuffer(1, audio.sampleRate * time, audio.sampleRate);
  noise.buffer.getChannelData(0)
    .forEach(function(_, i, output) { output[i] = Math.random() * 2 - 1; });

	noise.start(audio.currentTime);
	noise.stop(audio.currentTime + time);

  return noise;
};

function chain(items) {
  for (var i = 0; i < items.length - 1; i++) {
    items[i].connect(items[i + 1]);
  }
};

function decay(item, start, end, time) {
	item.setValueAtTime(start, audio.currentTime);
	item.exponentialRampToValueAtTime(end, audio.currentTime + time);
};

function createOscillator(type, startFreq, endFreq, time) {
  var oscillator = audio.createOscillator();
  oscillator.type = type;

  decay(oscillator.frequency, startFreq, endFreq, time);
	oscillator.start(audio.currentTime);
	oscillator.stop(audio.currentTime + time);

  return oscillator;
};

function kick() {
  var time = 0.2;
  chain([createOscillator("sine", 160, 0.01, time),
         createGain(0.5, 0.01, time),
         audio.destination]);
};

function highHat() {
  var time = 0.3;
  chain([createNoise(time),
         createFilter("highpass", 10000),
         createGain(0.2, 0.01, time),
         audio.destination]);
};

function snare() {
  var time = 0.2;

  chain([createOscillator("triangle", 150, 0.01, time),
         createGain(0.7, 0.01, time),
         audio.destination]);

  chain([createNoise(time),
         createFilter("highpass", 5000),
         createGain(0.4, 0.01, time),
         audio.destination]);
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

var data = {
  tracks: [createTrack(highHat), createTrack(snare), createTrack(kick)],
  iStep: 0,
  lastStepTime: Date.now()
};

data.tracks[0].steps[4] = true;

var screen = document.getElementById("screen").getContext("2d");

(function tick() {
  update(data);
  draw(screen, data);
  requestAnimationFrame(tick);
})();
