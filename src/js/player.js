class Player {
    constructor(name, enemyGameboard) {
        this.name = name;
        this.enemyGameboard = enemyGameboard;
    }

    takeTurn(row, col) {
        // If attack is invalid.
        if (row < 0 || row >= 10 || col < 0 || col >= 10) {
            throw new Error('Invalid attack coordinates. The attack is outside of the grid\'s boundaries.');
        }

        // Check if the grid's cell has been hit already.
        if (this.enemyGameboard.grid[row][col].hit) {
            throw new Error('That cell has already been attacked.');
        }

        this.enemyGameboard.receiveAttack(row, col);
    }
}

module.exports = Player;
