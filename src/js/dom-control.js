// eslint-disable-next-line import/no-cycle
import GAME_CONTROLS from './game-controls';

const DOMMethods = {
    disappearIntroScreen() {
        const introScreen = document.querySelector('[data-intro-screen]');
        introScreen.classList.add('vanish-screen');
        setTimeout(() => {
            document.querySelector('[data-intro-screen]').remove();
        }, 1000);
    },
    showPlaceShipsScreen() {
        const placeShipsScreen = document.querySelector('[data-place-your-ships-screen]');
        placeShipsScreen.classList.add('appear-screen');
    },
    setUserName(playerName) {
        if (playerName === '') {
            return;
        }
        document.querySelector('[data-player-name]').textContent = playerName;
        document.querySelector('[data-game-screen-player-name]').textContent = playerName;
    },
    disappearPlaceShipsScreen() {
        const placeShipsScreen = document.querySelector('[data-place-your-ships-screen]');
        placeShipsScreen.classList.add('disappear-place-ships-screen');
        setTimeout(() => {
            document.querySelector('[data-place-your-ships-screen]').remove();
        }, 1000);
    },
    appearGameScreen() {
        const gameScreen = document.querySelector('[data-game-screen]');
        gameScreen.classList.add('appear-game-screen');
    },
    // Render gameboards to begin game.
    renderGameboards(player, computer) {
        // References to DOM elements.
        const playerGameboard = document.querySelector('[data-player-gameboard]');
        playerGameboard.innerHTML = '';
        const computerGameboard = document.querySelector('[data-computer-gameboard]');
        computerGameboard.innerHTML = '';

        // Create grid rows DOM.
        for (let a = 0; a < 10; a += 1) {
            const playerGridRow = document.createElement('div');
            const computerGridRow = document.createElement('div');
            playerGridRow.classList.add('grid-row');
            computerGridRow.classList.add('grid-row');

            // Create grid cells DOM.
            for (let b = 0; b < 10; b += 1) {
                const playerGridCell = document.createElement('div');
                const computerGridCell = document.createElement('div');
                playerGridCell.classList.add('grid-cell');
                computerGridCell.classList.add('grid-cell');

                const computerCell = player.enemyGameboard.grid[a][b];
                const playerCell = computer.enemyGameboard.grid[a][b];

                if (computerCell.ship !== null && computerCell.hit) {
                    computerGridCell.style.backgroundColor = '#00ff00';
                } else if (computerCell.ship === null && computerCell.hit) {
                    computerGridCell.style.backgroundColor = '#ff0000';
                } else {
                    computerGridCell.addEventListener('click', () => {
                        player.takeTurn(a, b);
                        computer.takeTurn();
                        GAME_CONTROLS.checkForWinner(player, computer);
                        this.renderGameboards(player, computer);
                    });
                }
                computerGridRow.appendChild(computerGridCell);

                if (playerCell.ship !== null && playerCell.hit === false) {
                    playerGridCell.style.backgroundColor = '#ffffff';
                } else if (playerCell.ship !== null && playerCell.hit) {
                    playerGridCell.style.backgroundColor = '#00ff00';
                } else if (playerCell.ship === null && playerCell.hit) {
                    playerGridCell.style.backgroundColor = '#ff0000';
                }
                playerGridRow.appendChild(playerGridCell);
            }
            playerGameboard.appendChild(playerGridRow);
            computerGameboard.appendChild(computerGridRow);
        }
    },

    // Render gameboard to place ships.
    renderGameboardToPlaceShips(gameboard) {
        const gameboardToPlaceShips = document.querySelector('[data-place-ships-gameboard]');
        gameboardToPlaceShips.innerHTML = '';
        // Create rows.
        for (let a = 0; a < 10; a += 1) {
            const gridRow = document.createElement('div');
            gridRow.classList.add('grid-row');

            // Create grid cells.
            for (let b = 0; b < 10; b += 1) {
                const gridCell = document.createElement('div');
                gridCell.classList.add('grid-cell');

                // Create reference to gameboard cell.
                const cell = gameboard.grid[a][b];
                if (cell.ship !== null) {
                    gridCell.style.backgroundColor = 'white';
                } else {
                    gridCell.addEventListener('dragover', (event) => {
                        event.preventDefault();
                    });
                    gridCell.addEventListener('drop', (event) => {
                        event.preventDefault();
                        const shipLength = Number(event.dataTransfer.getData('text'));
                        GAME_CONTROLS.placeShip(gameboard, a, b, shipLength);
                        this.renderGameboardToPlaceShips(gameboard);
                    });
                }
                gridRow.appendChild(gridCell);
            }
            gameboardToPlaceShips.appendChild(gridRow);
        }
    },

    rotateShips() {
        const shipsDirection = document.querySelector('#ship-direction').getAttribute('data-ship-direction');
        const shipsContainer = document.querySelector('.ships-section');
        const ships = document.querySelectorAll('.ship');
        if (shipsDirection === 'vertical') {
            shipsContainer.style.flexDirection = 'row';
            ships.forEach((ship) => {
                const singleShip = ship;
                singleShip.classList.add('vertical');
                singleShip.classList.remove('horizontal');
            });
        } else {
            shipsContainer.style.flexDirection = 'column';
            ships.forEach((ship) => {
                const singleShip = ship;
                singleShip.classList.add('horizontal');
                singleShip.classList.remove('vertical');
            });
        }
    },

    showWinnerScreen(winner) {
        // Hide game screen.
        const winnerName = document.querySelector('[data-game-screen-player-name]').textContent;
        const gameScreen = document.querySelector('[data-game-screen]');
        gameScreen.classList.add('disappear-game-screen');
        setTimeout(() => {
            gameScreen.style = 'display:none !important;';
            gameScreen.remove();
        }, 1000);

        // Show winner screen.
        const displayWinnerName = document.querySelector('[data-winner-name]');
        displayWinnerName.textContent = winnerName;
        const winnerScreen = document.querySelector('[data-winner-screen]');
        setTimeout(() => {
            winnerScreen.style = 'display:flex';
            winnerScreen.classList.add('appear-winner-screen');
        }, 1200);
        const playerWinner = document.querySelector('[data-winner]');
        const computerWinner = document.querySelector('[data-loser]');
        if (winner === 'Player') {
            playerWinner.style = 'display:flex !important;';
            computerWinner.style = 'display:none;';
        } else if (winner === 'Computer') {
            computerWinner.style = 'display:flex !important;';
            playerWinner.style = 'display:none;';
        }
    },

    notifyError(error) {
        const notificationBox = document.querySelector('[data-notification-box]');
        notificationBox.classList.add('appear-notifications-box');
        const notificationMessage = document.querySelector('[data-notification-message]');
        notificationMessage.textContent = error;
        setTimeout(() => {
            notificationBox.classList.remove('appear-notifications-box');
        }, 4000);
    },
};

export default DOMMethods;
