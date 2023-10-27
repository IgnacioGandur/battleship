const Ship = require('./../js/ship'),
    Gameboard = require('./../js/gameboard'),
    Player = require('./../js/player'),
    Computer = require('./../js/computer');

// Try the computers's takeTurn function in an empty gameboard
// To see if the attack are registered correctly.
test('Computer takesTurn function', () => {
    const playerGameboard = new Gameboard(),
    computerGameboard = new Gameboard(),
    player = new Player('Ignacio', computerGameboard),
    computer = new Computer(playerGameboard);
    computer.takeTurn();
    computer.takeTurn();
    computer.takeTurn();
    computer.takeTurn();
    computer.takeTurn();
    expect(playerGameboard.missedAttacks).toBe(5);
})