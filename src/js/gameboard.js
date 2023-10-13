class Gameboard {
    constructor() {
        this.grid = Array(10).fill(null).map(() => Array(10).fill(null).map(() => (
            { ship: null, hit: false })));
        this.missedAttacks = 0;
        // this.allShipsSunk = false;
    }

    // Check if ship placement is out of boundaries.
    placeShip(ship, row, col, isHorizontal) {
        if (row >= 10 || col >= 10) {
            throw new Error('Ship placement out of boundaries.');
        }

        const shipLength = ship.length;

        if (isHorizontal) {
            // If the ship placement overflows the grid's horizontal positioning, throw error.
            if ((col + ship.length) > 10) {
                throw new Error('Invalid ship placement, the ship exceeds the grid.');
            }

            let gridColumn = col;

            // If there's already another ship in the grid in the same place.
            for (let a = 0, columnNumber = col; a < shipLength; a += 1, columnNumber += 1) {
                if (this.grid[row][columnNumber].ship !== null) {
                    throw new Error('Invalid ship placement, the ship overlaps another ship horizontally.');
                }
            }
            // If the placement is valid, proceed.
            for (let i = 0; i < shipLength; i += 1, gridColumn += 1) {
                this.grid[row][gridColumn].ship = ship;
            }
        } else {
            // If the ship placement overflows the grid's vertical positioning, throw error.
            if ((row + ship.length) > 10) {
                throw new Error('Invalid ship placement, the ship exceeds the grid.');
            }

            let gridRow = row;

            // If there's already another ship in the grid in the same place.
            for (let a = 0, rowNumber = row; a < shipLength; a += 1, rowNumber += 1) {
                if (this.grid[rowNumber][col].ship !== null) {
                    throw new Error('Invalid ship placement, the ship overlaps another ship vertically.');
                }
            }
            // If the placement is valid, proceed.
            for (let i = 0; i < shipLength; i += 1, gridRow += 1) {
                this.grid[gridRow][col].ship = ship;
            }
        }
    }

    receiveAttack(row, col) {
        // Check if the grid cell has been hit already.
        if (this.grid[row][col].hit === true) {
            throw new Error('That grid cell has been attacked already.');
        }

        // If there's a ship in the attacked grid cell.
        if (this.grid[row][col].ship !== null) {
            this.grid[row][col].ship.receiveHit();
            this.grid[row][col].hit = true;
        // I there isn't a ship in the attacked place.
        } else {
            this.grid[row][col].hit = true;
            this.missedAttacks += 1;
        }
    }

    // Check if all the ships in the grid have been sunk.
    allShipsSunk() {
        // Loop through all the grid cells.
        for (let row = 0; row < 10; row += 1) {
            for (let col = 0; col < 10; col += 1) {
                const cell = this.grid[row][col];
                // If it finds at least one ship whose "isSunk" property is false, return false.
                if (cell.ship && !cell.ship.isSunk) {
                    return false;
                }
            }
        }
        // If it doesn't find a single ship whose "isSunk" property is false, return true.
        return true;
    }
}

module.exports = Gameboard;
