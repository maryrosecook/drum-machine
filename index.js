var audioCtx = new window.AudioContext();

var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.start();

var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

var BUTTON_SIZE = 50;
var STEP_EVERY = 200;
var TRACKS_ROW = 0;
var STEPS_ROW = 1;

function isPointInsideRectangle(p, r) {
  return p &&
    r &&
    !(p.x < r.x ||
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

function createTrack() {
  return [false, false, false, false, false, false, false, false];
};

function drawTracks(screen, data) {
  var COLORS = ["deeppink", "lightseagreen", "dodgerblue", "crimson"];
  data.tracks.forEach(function(_, i) {
    var position = buttonPosition(i, TRACKS_ROW);
    screen.fillStyle = i === data.iTrack ? COLORS[i] : "lightgray";
    screen.fillRect(position.x, position.y, BUTTON_SIZE, BUTTON_SIZE);
  });
};

function drawStepSequencer(screen, data) {
  data.tracks[data.iTrack].forEach(function(on, i) {
    var position = buttonPosition(i, STEPS_ROW);
    screen.fillStyle = on ? "gold" : "lightgray";
    screen.fillRect(position.x, position.y, BUTTON_SIZE, BUTTON_SIZE);

    if (i === data.iStep) {
      screen.fillStyle = "gray";
      screen.fillRect(position.x, position.y + BUTTON_SIZE, BUTTON_SIZE, 4);
    }
  });
};

function update(data) {
  var click = latestClick();

  for (var i = 0; i < data.tracks[data.iTrack].length; i++) {
    if (isPointInsideRectangle(click, buttonPosition(i, STEPS_ROW))) {
      data.tracks[data.iTrack][i] = !data.tracks[data.iTrack][i];
    }
  }

  for (var i = 0; i < data.tracks.length; i++) {
    if (isPointInsideRectangle(click, buttonPosition(i, TRACKS_ROW))) {
      data.iTrack = i;
    }
  }

  if (data.lastStepTime + STEP_EVERY < Date.now()) {
    data.iStep = (data.iStep + 1) % data.tracks[0].length;
    data.lastStepTime = Date.now();
  }
};

function draw(screen, data) {
  screen.clearRect(0, 0, screen.canvas.width, screen.canvas.height);
  drawTracks(screen, data);
  drawStepSequencer(screen, data);
};

var data = {
  iTrack: 0,
  tracks: [createTrack(), createTrack(), createTrack(), createTrack()],
  iStep: 0,
  lastStepTime: Date.now()
};

var screen = document.getElementById("screen").getContext("2d");

(function tick() {
  update(data);
  draw(screen, data);
  requestAnimationFrame(tick);
  // oscillator.frequency.value = mousePosition().x;
  // gainNode.gain.value = 1 - (mousePosition().y / pageSize().y);



})();
