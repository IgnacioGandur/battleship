const Ship = require('../js/ship');

test('Information about new ship', () => {
    const sampleShip = new Ship(5);
    expect(sampleShip).toEqual({length:5, hitsCounter: 0, isSunk:false});
});

test('Receive hit function', () => {
    const sampleShip = new Ship(3);
    sampleShip.receiveHit();
    expect(sampleShip.hitsCounter).toBe(1);
})

test('Check if ship is NOT sunk after some hits', () => {
    const sampleShip = new Ship(5);
    sampleShip.receiveHit();
    sampleShip.receiveHit();
    sampleShip.receiveHit();
    expect(sampleShip.isSunk).toBe(false);
})

test('Check if ship is sunk after enough hits', () => {
    const sampleShip = new Ship(4);
    sampleShip.receiveHit();
    sampleShip.receiveHit();
    sampleShip.receiveHit();
    sampleShip.receiveHit();
    expect(sampleShip.isSunk).toBe(true);
})
