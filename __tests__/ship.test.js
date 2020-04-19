
const Ship = require("../src/ship");


describe("Ship", () => {
  describe("with ports and an itinerary", () => {
    let calais;
    let dover;
    let itinerary;
    let ship;

    beforeEach(() => {
      calais = {name: "Calais" , removeShip: jest.fn() ,addShip: jest.fn()};
      dover = {name: "Dover" , removeShip: jest.fn(), addShip: jest.fn()};
      itinerary = {ports: [dover , calais]}
      ship = new Ship(itinerary);
      ship.currentPort = dover;
    });
    it("can be instantiated", () => {
      expect(new Ship(itinerary)).toBeInstanceOf(Object);
    });
    it("gets added to the port on instatiation" , () => {
      expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
    });
    it("has a strating port", () => {
      expect(ship.currentPort.name).toEqual("Dover");
    });
    it("has a previousPort property set to null on start" , () => {
      expect(ship).toHaveProperty("previousPort");
      expect(ship.previousPort).toEqual(null);
    });
    it("can set sail", () => {
      ship.setSail();
      expect(ship.previousPort.name).toEqual("Dover");
      expect(ship.currentPort).toBeFalsy();
    });
    it("can dock at a port", () => {
      ship.dock();
      expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
    });
    it("throws an error if reached final destination", () => {
      ship.setSail();
      ship.dock();
      expect(() => ship.setSail()).toThrowError(
        `The ship is docked in Calais which is the final destination`
      );
    });
    it("removes ships that setSail", () => {
      ship.setSail();
      expect(dover.removeShip).toHaveBeenCalledWith(ship);
    });
  });
});
