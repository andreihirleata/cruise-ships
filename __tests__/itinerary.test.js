/* eslint-disable */
const Itinerary = require("../src/itinerary");
const Port = require("../src/port");

const calais = new Port("Calais");
const dover = new Port("Dover");
const itinerary = new Itinerary([calais, dover]);
describe("Itinerary" , () => {
    it("can be instantiated" , () => 
    {
        expect(itinerary).toBeInstanceOf(Object);
    });
    it("has a ports property" , () => {
        expect(new Itinerary()).toHaveProperty("ports");
    });
});