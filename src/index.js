import './css/styles.css';
import DOMMethods from './js/dom-control';
import GAME_CONTROLS from './js/game-controls';

let userName = '';

// Save the user name every time he enters an input in the input field.
document.querySelector('[data-user-name]').addEventListener('input', () => {
    userName = document.querySelector('[data-user-name]').value;
});

document.querySelector('[data-start-game-button]').addEventListener('click', () => {
    const [player, computer] = GAME_CONTROLS.setNewGame(userName);
    DOMMethods.renderGameboards(player, computer);
});
