import { Application } from "stimulus";
import CounterController from '../counter_controller'

describe("CounterController", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div data-controller="counter">
      <h3 data-target="counter.display" type="text"></h3>
    
      <button data-action="click->counter#increase">
        +
      </button>
      | 
      <button data-action="click->counter#decrease">
        -
      </button>
    </div>`;

    const application = Application.start();
    application.register("counter", CounterController);
  });

  describe("#increase", () => {
    it("increases the value to 1", () => {
      const increaseButton = document.querySelector("button[data-action='click->counter#increase']");
      const displayTarget = document.querySelector("[data-target='counter.display']");

      increaseButton.click();
      expect(displayTarget.innerHTML).toEqual("1");
    });
  });

  describe("#decrease", () => {
    it("decreases the value to -1", () => {
      const decreaseButton = document.querySelector("button[data-action='click->counter#decrease']");
      const displayTarget = document.querySelector("[data-target='counter.display']");

      decreaseButton.click();
      expect(displayTarget.innerHTML).toEqual("-1");
    });
  });

  describe("multiple clicks", () => {
    it("increases and decreases in sequence", () => {
      const increaseButton = document.querySelector("button[data-action='click->counter#increase']");
      const decreaseButton = document.querySelector("button[data-action='click->counter#decrease']");
      const displayTarget = document.querySelector("[data-target='counter.display']");

      increaseButton.click();
      increaseButton.click();
      increaseButton.click();
      increaseButton.click();
      decreaseButton.click();
      decreaseButton.click();

      expect(displayTarget.innerHTML).toEqual("2");
    });
  });
});
