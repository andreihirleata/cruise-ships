/* eslint-disable */
const Ship = require("../src/ship");
const Port = require("../src/port");

const port = new Port("Dover");
const ship = new Ship(port);
const calais = new Port("Calais");


describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship(port)).toBeInstanceOf(Object);
  });
  it("has a strating port", () => {
    expect(ship.currentPort).toBe("Dover");
  });
  it("can set sail" , () => {
    ship.setSail(); 
    expect(ship.currentPort).toBeFalsy();
  });
  it("can dock at a port", () => {
    ship.dock(calais);
    expect(ship.currentPort).toEqual("Calais");
    ship.dock(new Port("port2"));
    expect(ship.currentPort).toEqual('port2');
  });
});
