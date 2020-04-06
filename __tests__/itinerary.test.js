const Itinerary = require("../src/itinerary");

describe("Itinerary", () => {
  it("can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  it("has a ports property", () => {
    expect(new Itinerary()).toHaveProperty("ports");
  });
});
