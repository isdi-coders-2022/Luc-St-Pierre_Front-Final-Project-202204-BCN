import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button with the text 'Sign up'", () => {
      render(
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button", { name: "Sign up" });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
