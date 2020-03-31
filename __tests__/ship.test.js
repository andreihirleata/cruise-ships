/* eslint-disable */
const Ship = require("../src/ship");
const Port = require("../src/port");
const ship = new Ship("Dover");
const port = new Port("Calais");


describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a strating port", () => {
    expect(ship.startingPort).toBe("Dover");
  });
  it("can set sail" , () => {
    ship.setSail(); 
    expect(ship.currentPort).toBeFalsy();
  });
  it("can dock at a port", () => {
    ship.dock(port);
    expect(ship.currentPort).toEqual("Calais");
  });
});
