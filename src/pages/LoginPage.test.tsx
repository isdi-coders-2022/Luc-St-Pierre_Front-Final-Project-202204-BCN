import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button with the text 'Sign in'", () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button", { name: "Sign in" });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
