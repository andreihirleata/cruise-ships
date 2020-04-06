
const Port = require("../src/port");
/*
  TODO : Fix last test
  need to create a ship stub after second describe
  AND
  add the ship stub to each port in the beforeEach
*/

describe("Port", () => {
  describe("with ships / add / removee", () => {
    let calais;
    let dover;

    const bigShip = jest.fn();
    const ship = jest.fn();

    beforeEach(() => {
      calais = new Port("Calais");
      dover = new Port("Dover");
    });

    it("can be instantiated", () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
    it("can have ships added and removed to it", () => {
      dover.addShip(bigShip);
      dover.addShip(ship);
      expect(dover.ships).toContain(ship);
      expect(dover.ships).toContain(bigShip);
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
