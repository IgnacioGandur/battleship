import Computer from './computer';
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
        console.log(player);
        console.log(computer);
    },
};

export default GAME_CONTROLS;
