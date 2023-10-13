const Ship = require('./../js/ship');
const Gameboard = require('./../js/gameboard');
const Player = require('./../js/player');

test('Take turn to attack.', () => {
    const enemyBoard = new Gameboard(),
        ship = new Ship(4),
        newPlayer = new Player('Ignacio', enemyBoard);
    enemyBoard.placeShip(ship, 0, 0, true);
    newPlayer.takeTurn(0, 0);
    expect(newPlayer.enemyGameboard.grid[0][0].hit).toBe(true);
})

test('Take turn. Throw error when attacking the same grid cell twice.', () => {
    const gameboard = new Gameboard(),
        ship = new Ship(3),
        player = new Player('Ignacio', gameboard);
    gameboard.placeShip(ship, 0, 0, true);
    player.takeTurn(0, 0);
    expect(() => {
        player.takeTurn(0, 0);
    }).toThrow();
})