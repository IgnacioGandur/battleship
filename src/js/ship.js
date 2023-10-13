class Ship {
    constructor(length) {
        if (typeof length !== 'number' || length < 1 || length > 5) {
            throw new Error('Invalid ship length');
        }
        this.length = length;
        this.hitsCounter = 0;
        this.isSunk = false;
    }

    receiveHit() {
        if (!this.isSunk) {
            this.hitsCounter += 1;
            this.checkShipHealth();
            return true;
        }
        return false;
    }

    checkShipHealth() {
        if (this.hitsCounter === this.length) {
            this.isSunk = true;
        }
    }
}

module.exports = Ship;
