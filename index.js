function createAmplifier(startValue, duration) {
  var amplifier = audio.createGain();
  decay(amplifier.gain, startValue, duration);
  return amplifier;
};

function chain() {
  for (var i = 0; i < arguments.length - 1; i++) {
    arguments[i].connect(arguments[i + 1]);
  }
};

function decay(item, startValue, duration) {
  item.setValueAtTime(startValue, audio.currentTime);
  item.exponentialRampToValueAtTime(0.01, audio.currentTime + duration);
};

function createSineWave(duration) {
  var oscillator = audio.createOscillator();
  oscillator.type = "sine";

  oscillator.start(audio.currentTime);
  oscillator.stop(audio.currentTime + duration);

  return oscillator;
};

function note(frequency) {
  return function() {
    var duration = 0.5;
    var sineWave = createSineWave(duration);
    sineWave.frequency.value = frequency;
    chain(sineWave,
          createAmplifier(1, duration),
          audio.destination);
  };
};

function kick() {
  var duration = 1;
  var sineWave = createSineWave(duration);
  decay(sineWave.frequency, 160, duration);
  chain(sineWave,
        createAmplifier(1, duration),
        audio.destination);
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

function createTrack(playSound) {
  var steps = [];
  for (var i = 0; i < 16; i++) {
    steps.push(false);
  }

  return { steps: steps, playSound: playSound };
};

function drawTracks(screen, data) {
  data.tracks.forEach(function(track, row) {
    track.steps.forEach(function(on, column) {
      drawButton(screen, column, row, on ? "gold" : "lightgray");
    });
  });
};

function drawButton(screen, column, row, color) {
  var position = buttonPosition(column, row);
  screen.fillStyle = color;
  screen.fillRect(position.x, position.y, BUTTON_SIZE, BUTTON_SIZE);
};

var data = {
  step: 0,
  tracks: [createTrack(note(880)),
           createTrack(note(659)),
           createTrack(note(587)),
           createTrack(note(523)),
           createTrack(note(440)),
           createTrack(kick)]
};

var BUTTON_SIZE = 25;
var audio = new AudioContext();
var screen = document.getElementById("screen").getContext("2d");

// update

setInterval(function update() {
  data.step = (data.step + 1) % data.tracks[0].steps.length;

  data.tracks
    .filter(function(track) { return track.steps[data.step]; })
    .forEach(function(track) { track.playSound(); })
}, 100);

// draw

(function draw() {
  screen.clearRect(0, 0, screen.canvas.width, screen.canvas.height);
  drawTracks(screen, data);
  drawButton(screen, data.step, data.tracks.length, "deeppink");

  requestAnimationFrame(draw);
})();

// handle events

(function setupButtonClicking() {
  addEventListener("click", function(e) {
    var click = { x: e.clientX, y: e.clientY };
    data.tracks.forEach(function(track, row) {
      track.steps.forEach(function(on, column) {
        if (isPointInButton(click, column, row)) {
          track.steps[column] = !on;
        }
      });
    });
  });
})();
