var audioCtx = new window.AudioContext();

var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.start();

var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

var BUTTON_SIZE = 50;
var STEP_EVERY = 200;

var mousePosition = (function() {
  var mousePosition = { x: 0, y: 0 };
  window.addEventListener("mousemove", function(e) {
    mousePosition = { x: e.clientX, y: e.clientY };
  });

  return function() {
    return mousePosition;
  };
})();

function pageSize() {
  return { x: document.body.clientWidth, y: document.body.clientHeight };
};

function drawButton(screen, button) {
  screen.fillStyle = button.on ? button.color : "lightgray";
  screen.fillRect(button.x, button.y, BUTTON_SIZE, BUTTON_SIZE);
};

function drawCurrentStep(screen, steps) {
  var button = steps.filter(function(button) { return button.currentStep; })[0];
  screen.fillStyle = "darkgoldenrod";
  screen.fillRect(button.x, button.y + BUTTON_SIZE - 6, BUTTON_SIZE, 6);
};

function createButton(position, color, click) {
  return { x: position.x, y: position.y, color: color, click: click, on: false };
};

function isPointInsideRectangle(p, r) {
  return !(p.x < r.x ||
           p.y < r.y ||
           p.x > r.x + BUTTON_SIZE ||
           p.y > r.y + BUTTON_SIZE);
};

var newClickPositions = (function createNewClickPositions() {
  var clicks = [];
  var mouseDown = false;

  window.addEventListener("mousedown", function(e) {
    if (!mouseDown) {
      clicks.push({ x: e.clientX, y: e.clientY });
    }

    mouseDown = true;
  });

  window.addEventListener("mousedown", function() {
    mouseDown = false;
  });

  return function newClickPositions() {
    return clicks.splice(0, clicks.length);
  };
})();

function buttonPosition(column, row) {
  return {
    x: BUTTON_SIZE / 2 + column * BUTTON_SIZE * 1.5,
    y: BUTTON_SIZE / 2 + row * BUTTON_SIZE * 1.5
  };
};

function createDrumMachine() {
  var drumMachine = { steps: [], lastStepTime: Date.now(), tracks: [] };

  ["deeppink", "lightseagreen", "dodgerblue", "crimson"].forEach(function(color, i) {
    var position = buttonPosition(i, 0);
    var button = createButton(position, color, function(button) {
      drumMachine.tracks.forEach(function(button) {
        button.on = false;
      });

      button.on = true;
    });

    drumMachine.tracks.push(button);
  });

  for (var i = 0; i < 8; i++) {
    var button = createButton(buttonPosition(i, 1), "gold", function(button) {
      button.on = !button.on;
    });

    button.currentStep = i === 0 ? true : false;
    drumMachine.steps.push(button);
  }

  return drumMachine;
};

function update(drumMachine) {
  var clickPositions = newClickPositions();

  function buttonGotClicked(button) {
    return clickPositions
      .filter(function(p) { return isPointInsideRectangle(p, button); })
      .length > 0;
  };

  drumMachine.steps.concat(drumMachine.tracks)
    .filter(buttonGotClicked)
    .forEach(function(button) { button.click(button); });

  if (drumMachine.lastStepTime + STEP_EVERY < Date.now()) {
    var iCurrentStep;
    for (var i = 0; i < drumMachine.steps.length; i++) {
      if (drumMachine.steps[i].currentStep) {
        iCurrentStep = i;
        break;
      }
    }

    var iNextStep = (iCurrentStep + 1) % drumMachine.steps.length;

    drumMachine.steps[iCurrentStep].currentStep = false;
    drumMachine.steps[iNextStep].currentStep = true;
    drumMachine.lastStepTime = Date.now();
  }
};

function draw(screen, drumMachine) {
  screen.clearRect(0, 0, screen.canvas.width, screen.canvas.height);

  drumMachine.steps.concat(drumMachine.tracks)
    .forEach(function(button) {
      drawButton(screen, button);
    });

  drawCurrentStep(screen, drumMachine.steps);
};

var drumMachine = createDrumMachine();
var screen = document.getElementById("screen").getContext("2d");

(function tick() {
  update(drumMachine);
  // oscillator.frequency.value = mousePosition().x;
  // gainNode.gain.value = 1 - (mousePosition().y / pageSize().y);
  draw(screen, drumMachine);

  requestAnimationFrame(tick);
})();
