import Computer from './computer';
// eslint-disable-next-line import/no-cycle
import DOMMethods from './dom-control';
import Gameboard from './gameboard';
import Player from './player';
import Ship from './ship';

const GAME_CONTROLS = {
    setNewGame(userName) {
        // Create game boards.
        const playerGameboard = new Gameboard();
        const computerGameboard = new Gameboard();

        // Populate game boards with ships.
        for (let a = 0, b = 5; a < 5; a += 1, b -= 1) {
            const shipForPlayer = new Ship(b);
            const shipForComputer = new Ship(b);
            playerGameboard.placeShip(shipForPlayer, a, 0, true);
            computerGameboard.placeShip(shipForComputer, a, 0, true);
        }

        // Create players.
        const player = new Player(userName, computerGameboard);
        const computer = new Computer(playerGameboard);

        // Render both players gameboards.
        return [player, computer];
    },

    checkForWinner(player, computer) {
        if (player.enemyGameboard.allShipsSunk()) {
            console.log('Player wins');
            DOMMethods.showWinnerScreen('Player');
        }
        if (computer.enemyGameboard.allShipsSunk()) {
            console.log('Computer wins');
            DOMMethods.showWinnerScreen('Computer');
        }
    },

    // Prepare ship to be placed by the player.
    // Adding drag controls to each ship.
    prepareShips() {
        // Carrier.
        document.querySelector('.carrier').addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
        // Battleship.
        document.querySelector('.battleship').addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
        // Cruiser.
        document.querySelector('.cruiser').addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
        // Submarine.
        document.querySelector('.submarine').addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
        // Destroyer.
        document.querySelector('.destroyer').addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
    },

    // Change the ships direction.
    changeShipAxis() {
        const shipDirection = document.querySelector('#ship-direction');
        if (shipDirection.getAttribute('data-ship-direction') === 'horizontal') {
            shipDirection.setAttribute('data-ship-direction', 'vertical');
            document.querySelector('#ship-direction').textContent = 'vertical';
        } else if (shipDirection.getAttribute('data-ship-direction') === 'vertical') {
            shipDirection.setAttribute('data-ship-direction', 'horizontal');
            document.querySelector('#ship-direction').textContent = 'horizontal';
        }
    },

    // Place the ships after the player drags them into the gameboard.
    placeShip(playerGameboard, row, column, shipLength) {
        try {
            const ship = new Ship(shipLength);
            const shipDirectionInfo = document.querySelector('#ship-direction').getAttribute('data-ship-direction');
            let shipDirection = null;
            if (shipDirectionInfo === 'horizontal') {
                shipDirection = true;
            } else {
                shipDirection = false;
            }

            playerGameboard.placeShip(ship, row, column, shipDirection);
            // Remove the ships after being placed.
            document.getElementById(`${shipLength}`).remove();
            // Update the ships placed counter.
            let shipsPlacedCounter = Number(document.querySelector('[data-number-of-ships-placed]').textContent);
            shipsPlacedCounter += 1;
            document.querySelector('[data-number-of-ships-placed]').textContent = shipsPlacedCounter;
        } catch (error) {
            DOMMethods.notifyError(error.message);
        }
    },
    // Randomly place the computer ships.
    placeComputerShips(computerGameboard) {
        try {
            // Create ships for the computer.
            const carrier = new Ship(5);
            const battleship = new Ship(4);
            const cruiser = new Ship(3);
            const submarine = new Ship(3);
            const destroyer = new Ship(2);
            const ships = [carrier, battleship, cruiser, submarine, destroyer];

            // Append them into the gameboard depending of the ship length and the random number.
            for (let a = 0; a < ships.length; a += 1) {
                // Decide ship direction; if === 0 is horizontal, if === 1 is vertical.
                const shipDirection = Math.floor(Math.random() * 2);
                if (shipDirection === 0) {
                    const randomRow = Math.floor(Math.random() * 10);
                    const randomColumnCase5 = Math.floor(Math.random() * 6);
                    const randomColumnCase4 = Math.floor(Math.random() * 5);
                    const randomColumnCase3 = Math.floor(Math.random() * 4);
                    const randomColumnCase2 = Math.floor(Math.random() * 3);
                    switch (ships[a].length) {
                    case 5:
                        computerGameboard.placeShip(ships[a], randomRow, randomColumnCase5, true);
                        break;
                    case 4:
                        computerGameboard.placeShip(ships[a], randomRow, randomColumnCase4, true);
                        break;
                    case 3:
                        computerGameboard.placeShip(ships[a], randomRow, randomColumnCase3, true);
                        break;
                    case 2:
                        computerGameboard.placeShip(ships[a], randomRow, randomColumnCase2, true);
                        break;
                    default:
                        return;
                    }
                // Vertical ship.
                } else {
                    const randomColumn = Math.floor(Math.random() * 10);
                    const randomRowCase5 = Math.floor(Math.random() * 6);
                    const randomRowCase4 = Math.floor(Math.random() * 5);
                    const randomRowCase3 = Math.floor(Math.random() * 4);
                    const randomRowCase2 = Math.floor(Math.random() * 3);
                    switch (ships[a].length) {
                    case 5:
                        computerGameboard.placeShip(ships[a], randomRowCase5, randomColumn, false);
                        break;
                    case 4:
                        computerGameboard.placeShip(ships[a], randomRowCase4, randomColumn, false);
                        break;
                    case 3:
                        computerGameboard.placeShip(ships[a], randomRowCase3, randomColumn, false);
                        break;
                    case 2:
                        computerGameboard.placeShip(ships[a], randomRowCase2, randomColumn, false);
                        break;
                    default:
                        return;
                    }
                }
            }
        // If ships overlap or an error happens, erase the grid, create a new one and try again.
        // Calling the function recursively.
        } catch {
            // New computer gameboard.
            const computerGB = computerGameboard;
            computerGB.grid = Array(10).fill(null).map(() => Array(10).fill(null).map(() => (
                { ship: null, hit: false })));
            this.placeComputerShips(computerGB);
        }
    },

    // Check if the player has placed all the ships to start the battle.
    startBattle() {
        const numberOfShipsPlaced = Number(document.querySelector('[data-number-of-ships-placed]').textContent);
        if (numberOfShipsPlaced < 5) {
            DOMMethods.notifyError('The game can\'t start if all the ships are not placed.');
            return false;
        }
        console.log('The game has started.');
        return true;
    },

};

export default GAME_CONTROLS;
