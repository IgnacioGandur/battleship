const Gameboard = require('./../js/gameboard');
const Ship = require('./../js/ship');

// Check's for wrongly placed ships.
test('Invalid ship placement, out of the grid\'s boundaries.', () => {
    const sampleGameboard = new Gameboard(),
        sampleShip = new Ship(3);
    expect (() => {
        sampleGameboard.placeShip(sampleShip, 10, 10, false);
    }).toThrow();
})

// Check if the place in the grid is taken by another ship.
test('Invalid ship placement, there\'s another ship in place already.', () => {
    const sampleGameboard = new Gameboard(),
        sampleShip1 = new Ship(3),
        sampleShip2 = new Ship(5);
        sampleGameboard.placeShip(sampleShip1, 0, 0, true);        
    expect(() => {
        sampleGameboard.placeShip(sampleShip2, 0, 2, true);
    }).toThrow();
} )


// Check's for ships placed correctly.
test('Valid ship placement', () => {
    const sampleGameboard = new Gameboard(),
        sampleShip = new Ship(3);
    sampleGameboard.placeShip(sampleShip, 0, 0, true);
    expect(sampleGameboard.grid[0][0].ship).toBeInstanceOf(Ship);
})

// Check's if the gameboard registers correctly for missed attacks.
test('Receive attack function, missed attack', () => {
    const sampleGameboard = new Gameboard();
    sampleGameboard.receiveAttack(0, 1);
    expect(sampleGameboard.grid[0][0].hit).toBe(false);
})

// Check's if the gameboard registers correctly for landed attacks.
test('Receive attack function, landed attack',  () => {
    const sampleGameboard = new Gameboard();
    sampleGameboard.receiveAttack(0, 0);
    expect(sampleGameboard.grid[0][0].hit).toBe(true);
})

// Check if the attacked grid cell has been attacked already.
test('Receive attack function, attacked the same grid cell twice', () => {
    const sampleGameboard = new Gameboard();
    sampleGameboard.receiveAttack(0, 0);
    expect(() => {
        sampleGameboard.receiveAttack(0, 0);
    }).toThrow();
})

// Check's if ship receives attack through the gameboard. 
test('Ship receives attack through the gameboard', () => {
    const sampleGameboard = new Gameboard(),
        sampleShip = new Ship(4);
    sampleGameboard.placeShip(sampleShip, 0, 0, true);
    sampleGameboard.receiveAttack(0, 0);
    sampleGameboard.receiveAttack(0, 1);
    sampleGameboard.receiveAttack(0, 2  );
    expect(sampleShip.hitsCounter).toBe(3);
})

// Keep track of missed attacks.
test('Keep track of missed attacks', () => {
    const sampleGameboard = new Gameboard(),
        sampleShip = new Ship(3);
    // Hit a ship, it must NOT count it as a missed attack.
    sampleGameboard.placeShip(sampleShip, 0, 0, false); 
    sampleGameboard.receiveAttack(0, 0);
    sampleGameboard.receiveAttack(0, 1);
    sampleGameboard.receiveAttack(0, 2);
    sampleGameboard.receiveAttack(0, 3);
    sampleGameboard.receiveAttack(0, 4);
    sampleGameboard.receiveAttack(0, 5);
    expect(sampleGameboard.missedAttacks).toBe(5)
})

// Check's if all the ships have been sunken. ====== PENDING TO COMPLETE ====== 
test('Check if all ships have been sunk', () => {
    const gameboard = new Gameboard(),
        ship1 = new Ship(3);
        ship2 = new Ship(4);
    gameboard.placeShip(ship1, 0, 0, true);
    gameboard.placeShip(ship2, 1, 0, true);
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(0, 2);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(1, 1);
    gameboard.receiveAttack(1, 2);
    gameboard.receiveAttack(1, 3);
    expect(gameboard.allShipsSunk()).toBe(true);
})