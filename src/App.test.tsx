import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text 'Welcome to Airbnb'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );
      const expectedText = screen.getByText(/Welcome to Airbnb/i);
      expect(expectedText).toBeInTheDocument();
    });
  });
});
