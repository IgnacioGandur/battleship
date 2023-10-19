const DOMMethods = {
    changeIntroScreen() {
        // document.querySelector('[data-intro-screen]').classList.add('vanish-screen');
        // document.querySelector('[data-place-your-ships-screen]').classList.add('appear-screen');
    },

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
                        this.renderGameboards(player, computer);
                    });
                }
                computerGridRow.appendChild(computerGridCell);

                if (playerCell.ship !== null && playerCell.hit) {
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
};

module.exports = DOMMethods;
