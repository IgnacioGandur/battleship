import GAME_CONTROLS from './game-controls';

const DOMMethods = {
    changeIntroScreen() {
        document.querySelector('[data-intro-screen]').classList.add('vanish-screen');
        setTimeout(() => {
            document.querySelector('[data-intro-screen]').style = 'display:none';
            document.querySelector('[data-game-screen]').style = 'display:block';
        }, 300);
        // document.querySelector('[data-place-your-ships-screen]').classList.add('appear-screen');
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
                        console.log('enter');
                        GAME_CONTROLS.checkIfShipPlacementIsValid(gameboard, a, b, gridCell);
                    });
                    gridCell.addEventListener('dragleave', (event) => {
                        event.preventDefault();
                        console.log('leave');
                        GAME_CONTROLS.checkIfShipPlacementIsValid(gameboard, a, b, gridCell);
                    });
                    gridCell.addEventListener('drop', (event) => {
                        event.preventDefault();
                        const shipLength = Number(event.dataTransfer.getData('text'));
                        GAME_CONTROLS.placeShip(gameboard, a, b, shipLength);
                        this.renderGameboardToPlaceShips(gameboard);
                        // Update the ships placed counter.
                        let shipsPlacedCounter = Number(document.querySelector('[data-number-of-ships-placed]').textContent);
                        shipsPlacedCounter += 1;
                        document.querySelector('[data-number-of-ships-placed]').textContent = shipsPlacedCounter;
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
};

export default DOMMethods;
