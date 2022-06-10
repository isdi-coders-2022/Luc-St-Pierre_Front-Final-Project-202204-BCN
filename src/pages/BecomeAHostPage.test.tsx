import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store/store";
import BecomeAHostPage from "./BecomeAHostPage";

describe("Given a BecomeAHostPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button with the text 'Let's go!'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <BecomeAHostPage />
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button", { name: "Let's go!" });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
