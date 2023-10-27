class Computer {
    constructor(playerGameboard) {
        this.enemyGameboard = playerGameboard;
        // Save the coordinates of each attack that has been already launched.
        this.coordinatesAlreadyUsed = [];
    }

    // Take turn and throw attack to the player's gameboard by passing the coordinates of the attack
    takeTurn() {
        // Create random coordinates between 0 and 9.
        const coordinates = {
            row: Math.floor(Math.random() * 10),
            column: Math.floor(Math.random() * 10),
        };

        // Check if randomly generated coordinates are already in array.
        const isAttackPresent = this.coordinatesAlreadyUsed.some((obj) => obj.row
        === coordinates.row && obj.column === coordinates.column);

        // If all the possible moves were already made by the computer.
        if (isAttackPresent && this.coordinatesAlreadyUsed.length === 100) {
            throw new Error('There aren\'t more possible moves.');
        }

        // If the coordinates are already present in the array, call the method recursively.
        if (isAttackPresent) {
            this.takeTurn();
        } else {
            // Destructure the coordinates object into separate variables to launch attack.
            const { row, column } = coordinates;
            this.coordinatesAlreadyUsed.push({ row, column });
            this.enemyGameboard.receiveAttack(row, column);
        }
    }
}

module.exports = Computer;
