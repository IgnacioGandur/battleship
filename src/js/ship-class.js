class Ship {
    constructor(length) {
        this.length = length;
        this.hitsCounter = 0;
        this.isSunk = false;
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
