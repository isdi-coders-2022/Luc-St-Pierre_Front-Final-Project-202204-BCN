import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store/store";
import BecomeAHostFormPage from "./BecomeAHostFormPage";

describe("Given a BecomeAHostFormPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button with the text 'Save and exit'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <BecomeAHostFormPage />
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button", {
        name: "Save and exit",
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
