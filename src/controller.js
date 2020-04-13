(function exportController() {
  class Controller {
    constructor(ship) {
      this.initialiseSea();
      this.ship = ship;

      document
        .querySelector("#sailButton")
        .addEventListener("click",  () => {
          this.setSail();
        });
    }
    initialiseSea() {
      const backgrounds = [`./images/water0.png`, `./images/water1.png`];
      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector(`#viewport`).style.backgroundImage = `url('${
          backgrounds[backgroundIndex % backgrounds.length]
        }')`;
        backgroundIndex += 1;
      }, 1000);
    }

    renderPorts(ports) {
      const portsElement = document.querySelector("#ports");
      portsElement.style.width = "0px";

      ports.forEach((port, index) => {
        const newPortElement = document.createElement("div");
        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;
        newPortElement.className = "port";

        portsElement.appendChild(newPortElement);

        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
      });
    }

    renderShip() {
      const shipIndex = this.ship.itinerary.ports.findIndex(
        (shipIn) => shipIn === this.ship.currentPort
      );
      const portElement = document.querySelector(
        `[data-port-index='${shipIndex}']`
      );
      const shipElement = document.querySelector("#ship");
      shipElement.style.top = `${portElement.offsetTop + 32}px`;
      shipElement.style.left = `${portElement.offsetLeft + 32}px`;
      this.renderMessage(`The ship is docked in ${this.ship.currentPort.name}`);
    }

    setSail() {

      const currentPortIndex = ship.itinerary.ports.indexOf(this.ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
      
      if (!nextPortElement) {
        this.renderMessage('End of the line');
      }
      
      const shipElement = document.querySelector("#ship");
      this.renderMessage(`The ship is sailing from ${this.ship.currentPort.name} to ${this.ship.itinerary.ports[nextPortIndex].name}`);
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if (shipLeft === nextPortElement.offsetLeft - 32) {
          this.ship.setSail();
          this.ship.dock();
          clearInterval(sailInterval);
        }
        window.setTimeout( () => this.renderMessage(`The ship is docked in ${this.ship.itinerary.ports[nextPortIndex].name}`), 4000); 
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);
     
    }

    renderMessage(message) {
      const newMessageElement = document.createElement("div");
      newMessageElement.setAttribute("id" , "message");
      newMessageElement.innerHTML = message;

      const viewPortElement = document.querySelector("#viewport");
      viewPortElement.appendChild(newMessageElement);

      window.setTimeout( () => viewPortElement.removeChild(newMessageElement) , 2000);
    }
  }
  if (typeof module !== `undefined` && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
