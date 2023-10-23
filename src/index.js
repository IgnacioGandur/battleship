import './css/styles.css';
import Computer from './js/computer';
import DOMMethods from './js/dom-control';
import GAME_CONTROLS from './js/game-controls';
import Gameboard from './js/gameboard';
import Player from './js/player';

let userName = '';

const playerGameboard = new Gameboard();
const computerGameboard = new Gameboard();

// Create players.
const player = new Player(userName, computerGameboard);
const computer = new Computer(playerGameboard);

// Save the user name every time he enters an input in the input field.
document.querySelector('[data-user-name]').addEventListener('input', () => {
    userName = document.querySelector('[data-user-name]').value;
});

// Button to change the ship axis to be placed on the gameboard.
document.querySelector('[data-change-ship-axis]').addEventListener('click', () => {
    GAME_CONTROLS.changeShipAxis();
    DOMMethods.rotateShips();
});

// Button to go to the place ships section.
document.querySelector('[data-start-game-button]').addEventListener('click', () => {
    // const [player, computer] = GAME_CONTROLS.setNewGame(userName);
    // DOMMethods.renderGameboards(player, computer);
    // DOMMethods.changeIntroScreen();
    // DOMMethods.renderPlaceShipsSection()
    DOMMethods.renderGameboardToPlaceShips(computer.enemyGameboard);
    GAME_CONTROLS.prepareShips();
    GAME_CONTROLS.placeComputerShips(player.enemyGameboard);
});

// Button to start the battle.
document.querySelector('[data-start-battle-button]').addEventListener('click', () => {
    if (GAME_CONTROLS.startBattle()) {
        DOMMethods.renderGameboards(player, computer);
    } else {
        console.log('bla');
    }
    // GAME_CONTROLS.startBattle();
});
