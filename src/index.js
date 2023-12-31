import './css/styles.css';
import Computer from './js/computer';
import DOMMethods from './js/dom-control';
import GAME_CONTROLS from './js/game-controls';
import Gameboard from './js/gameboard';
import Player from './js/player';

// Save the user name every time he enters an input in the input field.
let userName = '';
const userNameInputField = document.querySelector('[data-user-name]');
userNameInputField.addEventListener('input', () => {
    DOMMethods.typeWriterSoundEffect();
    userName = document.querySelector('[data-user-name]').value;
});

// Create gameboards.
const playerGameboard = new Gameboard();
const computerGameboard = new Gameboard();

// Create players.
const player = new Player(userName, computerGameboard);
const computer = new Computer(playerGameboard);

// Button to go to "place ships" section.
const startGameButton = document.querySelector('[data-start-game-form]');
startGameButton.addEventListener('submit', (e) => {
    e.preventDefault();
    DOMMethods.beepSoundEffect();
    setTimeout(() => {
        DOMMethods.playMusic();
    }, 1000);
    DOMMethods.disappearIntroScreen();
    DOMMethods.renderGameboardToPlaceShips(computer.enemyGameboard);
    DOMMethods.setUserName(userName);
    GAME_CONTROLS.prepareShips();
    GAME_CONTROLS.placeComputerShips(player.enemyGameboard);
    setTimeout(() => {
        DOMMethods.showPlaceShipsScreen();
    }, 1050);
});

// Button to change the ship axis to be placed on the gameboard.
const changeShipAxisButton = document.querySelector('[data-change-ship-axis]');
changeShipAxisButton.addEventListener('click', () => {
    GAME_CONTROLS.changeShipAxis();
    DOMMethods.rotateShips();
    DOMMethods.clickSoundEffect();
});

// Button to start the battle.
const startBattleButton = document.querySelector('[data-start-battle-button]');
startBattleButton.addEventListener('click', () => {
    DOMMethods.clickSoundEffect();
    if (GAME_CONTROLS.startBattle()) {
        DOMMethods.renderGameboards(player, computer);
        DOMMethods.disappearPlaceShipsScreen();
        setTimeout(() => {
            DOMMethods.appearGameScreen();
        }, 1000);
    }
});

// Play again button.
const playAgainButton = document.querySelector('[data-play-again-button]');
playAgainButton.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
});

// Audio control buttons.
const muteButtons = document.querySelectorAll('[data-mute-music]');
muteButtons.forEach((button) => {
    button.addEventListener('click', () => {
        DOMMethods.pauseMusic();
        DOMMethods.clickSoundEffect();
    });
});

const unmuteButtons = document.querySelectorAll('[data-unmute-music]');
unmuteButtons.forEach((button) => {
    button.addEventListener('click', () => {
        DOMMethods.unpauseMusic();
        DOMMethods.clickSoundEffect();
    });
});
