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
  var oscillator = createOscillator("sine", time);
  decay(oscillator.frequency, 160, time);
  chain([oscillator,
         createGain(1, time),
         audio.destination]);
};

function buttonPosition(column, row) {
  return {
    x: BUTTON_SIZE / 2 + column * BUTTON_SIZE * 1.5,
    y: BUTTON_SIZE / 2 + row * BUTTON_SIZE * 1.5
  };
};

function isPointInButton(p, column, row) {
  var b = buttonPosition(column, row);
  return !(p.x < b.x ||
           p.y < b.y ||
           p.x > b.x + BUTTON_SIZE ||
           p.y > b.y + BUTTON_SIZE);
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

function createTrack(play) {
  var steps = [];
  for (var i = 0; i < 16; i++) {
    steps.push(false);
  }

  return { steps: steps, play: play };
};

function respondToButtonClicks(data) {
  var click = latestClick();

  if (click) {
    data.tracks.forEach(function(track, row) {
      track.steps.forEach(function(on, column) {
        if (isPointInButton(click, column, row)) {
          track.steps[column] = !on;
        }
      });
    });
  }
};

function step(data) {
  if (data.lastStepTime + STEP_EVERY < Date.now()) {
    data.iStep = (data.iStep + 1) % data.tracks[0].steps.length;
    data.lastStepTime = Date.now();

    data.tracks
      .filter(function(track) { return track.steps[data.iStep]; })
      .forEach(function(track) { track.play(); })
  }
};

function update(data) {
  respondToButtonClicks(data);
  step(data);
};

function drawTracks(screen, data) {
  data.tracks.forEach(function(track, row) {
    track.steps.forEach(function(on, column) {
      drawButton(screen, column, row, on ? "gold" : "lightgray");
    });
  });
};

function drawButton(screen, column, row, color) {
  var p = buttonPosition(column, row);
  screen.fillStyle = color;
  screen.fillRect(p.x, p.y, BUTTON_SIZE, BUTTON_SIZE);
};

function draw(screen, data) {
  screen.clearRect(0, 0, screen.canvas.width, screen.canvas.height);
  drawTracks(screen, data);
  drawButton(screen, data.iStep, data.tracks.length, "deeppink");
};

var data = {
  tracks: [createTrack(note(880)),
           createTrack(note(659)),
           createTrack(note(587)),
           createTrack(note(523)),
           createTrack(note(440)),
           createTrack(kick)],
  iStep: 0,
  lastStepTime: Date.now()
};

var BUTTON_SIZE = 25;
var STEP_EVERY = 100;

var audio = new window.AudioContext();
var screen = document.getElementById("screen").getContext("2d");

(function tick() {
  update(data);
  draw(screen, data);
  requestAnimationFrame(tick);
})();
