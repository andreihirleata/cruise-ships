class Ship {
  constructor(itinerary, previousPort = null) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = previousPort;
  }

  setSail() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
    // return `The ship is docked in ${this.currentPort.name} which is the final destination`;
  }
  dock() {
    if (this.currentPort){ return "this ship is already docked" }
    const previousDock = this.itinerary.ports.findIndex(
      port => port == this.previousPort
    );
    if (previousDock != -1) {
      this.currentPort = this.itinerary.ports[previousDock + 1];
    }
}
}

module.exports = Ship;
