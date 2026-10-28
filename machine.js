(() => {
  const machineButton = document.querySelector('#machine-switch');
  const machineStatus = document.querySelector('#machine-status');
  const machineVisual = document.querySelector('#machine-visual');
  const startButton = document.querySelector('#start-game');
  const gameArea = document.querySelector('#game-area');
  const runawaySwitch = document.querySelector('#runaway-switch');
  const gameState = document.querySelector('#game-state');
  const gameScore = document.querySelector('#game-score');
  const timeLeft = document.querySelector('#time-left');
  const gameMessage = document.querySelector('#game-message');

  if (!machineButton || !machineStatus || !machineVisual || !startButton || !gameArea || !runawaySwitch || !gameState || !gameScore || !timeLeft || !gameMessage) {
    return;
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let machineTimer = null;
  let gameTimer = null;
  let score = 0;
  let secondsRemaining = 10;

  function switchMachineOff() {
    machineVisual.classList.remove('machine-is-on');
    machineButton.disabled = false;
    machineButton.setAttribute('aria-pressed', 'false');
    machineButton.textContent = 'Turn the machine on';
    machineStatus.textContent = 'The machine turned itself off.';
  }

  function turnMachineOn() {
    if (machineTimer) {
      window.clearTimeout(machineTimer);
    }

    machineVisual.classList.add('machine-is-on');
    machineButton.disabled = true;
    machineButton.setAttribute('aria-pressed', 'true');
    machineButton.textContent = 'Machine is on';
    machineStatus.textContent = 'A tiny hand is reaching for the switch.';
    machineTimer = window.setTimeout(switchMachineOff, reducedMotion ? 80 : 900);
  }

  function updateScoreboard() {
    gameScore.textContent = String(score);
    timeLeft.textContent = `${secondsRemaining} ${secondsRemaining === 1 ? 'second' : 'seconds'}`;
  }

  function moveSwitch() {
    const horizontalSpace = Math.max(0, gameArea.clientWidth - runawaySwitch.offsetWidth);
    const verticalSpace = Math.max(0, gameArea.clientHeight - runawaySwitch.offsetHeight);
    const left = Math.round(Math.random() * horizontalSpace);
    const top = Math.round(Math.random() * verticalSpace);

    runawaySwitch.style.left = `${left}px`;
    runawaySwitch.style.top = `${top}px`;
  }

  function finishGame() {
    window.clearInterval(gameTimer);
    gameTimer = null;
    runawaySwitch.hidden = true;
    runawaySwitch.disabled = true;
    gameState.textContent = 'Finished';
    startButton.textContent = 'Play again';
    gameMessage.textContent = `Game over. Your final score is ${score}.`;
  }

  function startGame() {
    if (gameTimer) {
      window.clearInterval(gameTimer);
    }

    score = 0;
    secondsRemaining = 10;
    runawaySwitch.hidden = false;
    runawaySwitch.disabled = false;
    gameState.textContent = 'Playing';
    startButton.textContent = 'Restart game';
    gameMessage.textContent = 'The switch is loose. Catch it with a click, tap, Enter or Space.';
    updateScoreboard();
    moveSwitch();
    runawaySwitch.focus();

    gameTimer = window.setInterval(() => {
      secondsRemaining -= 1;
      updateScoreboard();

      if (secondsRemaining <= 0) {
        finishGame();
      }
    }, 1000);
  }

  machineButton.addEventListener('click', turnMachineOn);
  startButton.addEventListener('click', startGame);
  runawaySwitch.addEventListener('click', () => {
    if (!gameTimer) {
      return;
    }

    score += 1;
    updateScoreboard();
    gameMessage.textContent = `Caught it. Your score is ${score}.`;
    moveSwitch();
  });

  window.addEventListener('resize', () => {
    if (gameTimer) {
      moveSwitch();
    }
  });
})();
