
class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }

  setSail() {
    this.previousPort = this.currentPort;
    if (
      this.previousPort ===
      this.itinerary.ports[this.itinerary.ports.length - 1]
    ) {
      throw new Error(`The ship is docked in ${this.currentPort.name} which is the final destination`);
    }
    this.previousPort.removeShip(this);
    this.currentPort = null;
  }
  dock() {
    if (this.currentPort) {
      return "this ship is already docked";
    }
    const previousDock = this.itinerary.ports.findIndex(
      port => port === this.previousPort
    );
    if (previousDock != -1) {
      this.currentPort = this.itinerary.ports[previousDock + 1];
      this.currentPort.addShip(this);
    }
  }
}

module.exports = Ship;
