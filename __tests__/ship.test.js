/* eslint-disable */
const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");


const calais = new Port("Calais");
const dover = new Port("Dover");
const itinerary = new Itinerary([dover, calais]);
const ship = new Ship(itinerary);

beforeEach(() => {
  ship.currentPort = dover;
})

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship(itinerary)).toBeInstanceOf(Object);
  });
  it("has a strating port", () => {
    expect(ship.currentPort.name).toEqual("Dover");
  });
  it("can set sail" , () => {
    ship.setSail(); 
    expect(ship.previousPort.name).toEqual("Dover")
    expect(ship.currentPort).toBeFalsy();
  });
  it("can dock at a port", () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort.name).toEqual(calais.name);
    expect(ship.dock()).toBe("this ship is already docked");
  });
});