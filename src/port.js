

class Port {
  constructor(name , ships = []) {
    this.name = name;
    this.ships = ships;
  }
  addShip(ship) {
    this.ships.push(ship);
  }
  removeShip(ship) {
    const shipIndex = this.ships.indexOf(ship);
    if (shipIndex > -1) {
      this.ships.splice(shipIndex, 1);
    }

  }

}

module.exports = Port;