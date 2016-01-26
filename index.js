var audioCtx = new window.AudioContext();

var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.start();

var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

var BUTTON_SIZE = 50;
var STEP_EVERY = 200;

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

function createTrack() {
  return [false, false, false, false, false, false, false, false];
};

function update(data) {
  var click = latestClick();

  for (var row = 0; row < data.tracks.length; row++) {
    for (var column = 0; column < data.tracks[row].length; column++) {
      if (click && isPointInsideRectangle(click, buttonPosition(column, row))) {
        data.tracks[row][column] = !data.tracks[row][column];
      }
    }
  }

  if (data.lastStepTime + STEP_EVERY < Date.now()) {
    data.iStep = (data.iStep + 1) % data.tracks[0].length;
    data.lastStepTime = Date.now();
  }
};

function draw(screen, data) {
  screen.clearRect(0, 0, screen.canvas.width, screen.canvas.height);

  data.tracks.forEach(function(track, row) {
    data.tracks[row].forEach(function(on, column) {
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
