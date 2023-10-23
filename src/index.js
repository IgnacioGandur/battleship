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
    userName = document.querySelector('[data-user-name]').value;
});

// Create gameboards.
const playerGameboard = new Gameboard();
const computerGameboard = new Gameboard();

// Create players.
const player = new Player(userName, computerGameboard);
const computer = new Computer(playerGameboard);

// Button to change the ship axis to be placed on the gameboard.
const changeShipAxisButton = document.querySelector('[data-change-ship-axis]');
changeShipAxisButton.addEventListener('click', () => {
    GAME_CONTROLS.changeShipAxis();
    DOMMethods.rotateShips();
});

// Button to go to the place ships section.
const startGameButton = document.querySelector('[data-start-game-button]');
startGameButton.addEventListener('click', () => {
    DOMMethods.renderGameboardToPlaceShips(computer.enemyGameboard);
    GAME_CONTROLS.prepareShips();
    GAME_CONTROLS.placeComputerShips(player.enemyGameboard);
});

// Button to start the battle.
const startBattleButton = document.querySelector('[data-start-battle-button]');
startBattleButton.addEventListener('click', () => {
    if (GAME_CONTROLS.startBattle()) {
        DOMMethods.renderGameboards(player, computer);
    } else {
        console.log('bla');
    }
    // GAME_CONTROLS.startBattle();
});
