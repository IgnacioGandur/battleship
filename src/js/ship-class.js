class Ship {
    constructor(length, hitsCounter, isSunk = false) {
        this.length = length;
        this.hitsCounter = 0;
        this.isSunk = isSunk;
    }

    receiveHit() {
        this.hitsCounter += 1;
    }

    checkShipHealth() {
        if (this.hitsCounter === this.length) {
            this.isSunk = !this.isSunk;
        }
    }
}
