
const Port = require("../src/port");
const Ship = require("../src/ship");
const Itinerary = require("../src/itinerary");

describe("Port", () => {
  describe("with ships / add / removee", () => {
    let calais;
    let dover;
    let itinerary;
    let ship;
    const bigShip = jest.fn();

    beforeEach(() => {
      calais = new Port("Calais");
      dover = new Port("Dover");
      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary);

    });
    it("removes ships that setSail", () => {
      expect(dover.ships).toContain(ship);
      ship.setSail();
      expect(dover.ships).not.toContain(ship);
    });
    it("can be instantiated", () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
    it("can have ships added and removed to it", () => {
      dover.addShip(bigShip);
      expect(dover.ships).toContain(ship, bigShip);
      dover.removeShip(ship);
      expect(dover.ships).not.toContainEqual(ship);
    });
    it("contains ships", () => {
      expect(dover.ships).toContain(ship);
      ship.setSail();
      ship.dock();
      expect(calais.ships).toContain(ship);
    });
  });
});
