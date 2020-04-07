
const Port = require("../src/port");


describe("Port", () => {
  describe("with ships / add / removee", () => {
    let calais;
    let dover;

    const bigShip = {name: "ship" , removeShip: jest.fn(), addShip: jest.fn()}
    const ship = {name: "bigShip" , removeShip: jest.fn() , addShip: jest.fn()}

    beforeEach(() => {
      calais = new Port("Calais");
      dover = new Port("Dover");
    });

    it("can be instantiated", () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
    it("contains ships", () => {
      dover = new Port("Dover" ,ship);
      expect(dover.ships).toEqual(ship);
      calais = new Port("Calais" , bigShip)
      expect(calais.ships).toEqual(bigShip);
    });
    it("can have ships added and removed to it", () => {
      dover.addShip(bigShip);
      dover.addShip(ship);
      expect(dover.ships).toContain(ship);
      expect(dover.ships).toContain(bigShip);
      dover.removeShip(ship);
      expect(dover.ships).not.toContainEqual(ship);
    });

  });
});
