import { Application } from "stimulus";
import CounterController from '../counter_controller'
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  fireEvent,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  wait,
} from '@testing-library/dom'
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom/extend-expect'

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
      const increaseButton = getByText(document, '+')
      const displayTarget = getByText(document, "0")

      fireEvent.click(increaseButton);
      expect(displayTarget).toHaveTextContent('1');
    });
  });

  describe("#decrease", () => {
    it("decreases the value to -1", () => {
      const decreaseButton = getByText(document, '-')
      const displayTarget = getByText(document, "0")

      fireEvent.click(decreaseButton);
      expect(displayTarget).toHaveTextContent('-1');
    });
  });

  describe("multiple clicks", () => {
    it("increases and decreases in sequence", () => {
      const increaseButton = getByText(document, '+')
      const decreaseButton = getByText(document, '-')
      const displayTarget = getByText(document, "0")

      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      fireEvent.click(decreaseButton);
      fireEvent.click(decreaseButton);

      expect(displayTarget).toHaveTextContent('2');
    });
  });
});
