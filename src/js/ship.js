class Ship {
    constructor(length) {
        this.length = length;
        this.hitsCounter = 0;
        this.isSunk = false;
    }

    receiveHit() {
        if (this.isSunk === false) {
            this.hitsCounter += 1;
            this.checkShipHealth();
        }

        return false;
    }

    checkShipHealth() {
        if (this.hitsCounter === this.length) {
            this.isSunk = !this.isSunk;
        }
    }
}

module.exports = Ship;
