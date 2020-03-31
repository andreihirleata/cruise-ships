class Ship {
  constructor(startingPort, currentPort) {
    this.startingPort = startingPort;
    this.currentPort = startingPort;
  }

  setSail() {
    this.currentPort = "";
  }
  dock(port) {
    this.currentPort = port.name;
  }
}

module.exports = Ship;
