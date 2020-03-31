class Ship {
  constructor(currentPort) {
    this.currentPort = currentPort.name;
  }

  setSail() {
    this.currentPort = "";
  }
  dock(port) {
    this.currentPort = port.name;
  }
}

module.exports = Ship;
