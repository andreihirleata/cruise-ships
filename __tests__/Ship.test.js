/* eslint-disable */
const Ship = require("../src/Ship.js");

beforeEach(() => {
  ship = new Ship("Dover");
});

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a strating port", () => {
    expect(ship.startingPort).toBe("Dover");
  });
  it("can set sail" , () => {
    ship.setSail(); 
    expect(ship.startingPort).toBeFalsy();
  });
});
