var audio = new window.AudioContext();

var BUTTON_SIZE = 25;
var STEP_EVERY = 100;

function createGain(start, time) {
  var gain = audio.createGain();
  decay(gain.gain, start, time);
  return gain;
};

function chain(items) {
  for (var i = 0; i < items.length - 1; i++) {
    items[i].connect(items[i + 1]);
  }
};

function decay(item, start, time) {
	item.setValueAtTime(start, audio.currentTime);
	item.exponentialRampToValueAtTime(0.01, audio.currentTime + time);
};

function createOscillator(type, time) {
  var oscillator = audio.createOscillator();
  oscillator.type = type;

	oscillator.start(audio.currentTime);
	oscillator.stop(audio.currentTime + time);

  return oscillator;
};

function note(frequency) {
  return function() {
    var time = 0.5;
    var oscillator = createOscillator("sine", time);
    oscillator.frequency.value = frequency;
    chain([oscillator,
           createGain(1, time),
           audio.destination]);
  };
};

function kick() {
  var time = 1;
  var oscillator = createOscillator("sine", 160, time);
  decay(oscillator.frequency, 160, time);
  chain([oscillator,
         createGain(1, time),
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
  tracks: [createTrack(note(880.000)),
           createTrack(note(659.255)),
           createTrack(note(587.330)),
           createTrack(note(523.251)),
           createTrack(note(440.000)),
           createTrack(kick)],
  iStep: 0,
  lastStepTime: Date.now()
};

var screen = document.getElementById("screen").getContext("2d");

(function tick() {
  update(data);
  draw(screen, data);
  requestAnimationFrame(tick);
})();
