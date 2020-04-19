(function exportController() {
  class Controller {
    constructor(ship) {
      this.initialiseSea();
      this.ship = ship;

      document.querySelector("#sailButton").addEventListener("click", () => {
        this.setSail();
      });

      document
        .querySelector("#addPortButton")
        .addEventListener("click", (e) => {
          e.preventDefault();
          this.submitPort();
          this.renderPorts(this.ship.itinerary.ports);
          this.renderShip();
          document.querySelector("#portInput").value = '';
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

      portsElement.querySelectorAll("*").forEach((n) => n.remove());

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

      const topElement = document.querySelector("#top");
      topElement.innerHTML = `Current port:${this.ship.currentPort.name}`;
    }

    setSail() {
      document.querySelector("#sailButton").style.display = "none";

      const currentPortIndex = ship.itinerary.ports.indexOf(
        this.ship.currentPort
      );
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(
        `[data-port-index='${nextPortIndex}']`
      );
      const topElement = document.querySelector("#top");
      const bottomElement = document.querySelector("#bottom");

      if (!nextPortElement) {
        this.renderMessage("End of the line");
      }

      const shipElement = document.querySelector("#ship");

      this.renderMessage(
        `The ship is sailing from ${this.ship.currentPort.name} to ${this.ship.itinerary.ports[nextPortIndex].name}`
      );

      topElement.innerHTML = `Current port: `;
      bottomElement.innerHTML = `Previous port: ${this.ship.currentPort.name}`;

      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if (shipLeft === nextPortElement.offsetLeft - 32) {
          this.ship.setSail();
          this.ship.dock();

          topElement.innerHTML = `Current port: ${this.ship.currentPort.name}`;
          this.renderMessage(
            `The ship is docked in ${this.ship.itinerary.ports[nextPortIndex].name}`
          );
          document.querySelector("#sailButton").style.display = "inline-block";
          clearInterval(sailInterval);
          console.log(sailInterval);
        }
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);
    }

    renderMessage(message) {
      const newMessageElement = document.createElement("div");
      newMessageElement.setAttribute("id", "message");
      newMessageElement.innerHTML = message;

      const viewPortElement = document.querySelector("#viewport");
      viewPortElement.appendChild(newMessageElement);

      window.setTimeout(
        () => viewPortElement.removeChild(newMessageElement),
        2000
      );
    }
    submitPort() {
      const portName = document.querySelector("#portInput").value;
      const addedPort = new Port();
      addedPort.name = portName;
      this.ship.itinerary.ports.push(addedPort);
      this.renderPorts(this.ship.itinerary.ports);
      if (!this.ship.currentPort) {
        this.ship.currentPort = this.ship.itinerary.ports[0];
        console.log(this.ship.currentPort);
      }
    }
  }
  if (typeof module !== `undefined` && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
