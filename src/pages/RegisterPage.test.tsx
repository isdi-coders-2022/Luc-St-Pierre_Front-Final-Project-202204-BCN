import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store/store";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button with the text 'Sign up'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button", { name: "Sign up" });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
