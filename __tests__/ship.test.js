/* eslint-disable */
const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("Ship", () => {
  describe("with ports and an itinerary", () => {
    let calais;
    let dover;
    let itinerary;
    let ship;

    beforeEach(() => {
      calais = new Port("Calais");
      dover = new Port("Dover");
      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary);
      ship.currentPort = dover;
    });
    it("can be instantiated", () => {
      expect(new Ship(itinerary)).toBeInstanceOf(Object);
    });
    it("has a strating port", () => {
      expect(ship.currentPort.name).toEqual("Dover");
    });
    it("can set sail", () => {
      ship.setSail();
      expect(ship.previousPort.name).toEqual("Dover");
      expect(ship.currentPort).toBeFalsy();
    });
    it("can dock at a port", () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort.name).toEqual(calais.name);
      expect(ship.dock()).toBe("this ship is already docked");
    });
    it("throws an error if reached final destination", () => {
      ship.setSail();
      ship.dock();
      expect(() => ship.setSail()).toThrowError(
        `The ship is docked in Calais which is the final destination`
      );
    });
  });
});
