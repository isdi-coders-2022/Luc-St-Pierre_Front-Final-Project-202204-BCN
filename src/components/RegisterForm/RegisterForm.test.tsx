import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterForm from "./RegisterForm";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
}));

describe("Given a RegisterForm component", () => {
  describe("When it's rendered", () => {
    test("It should display a button with the text 'Sign up'", () => {
      const textButton = "Sign up";

      render(
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      );

      const expectedText = screen.getByText(textButton);

      expect(expectedText).toBeInTheDocument();
    });

    test("It should display a form with 3 inputs of type text", () => {
      render(
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      );

      const expectedTextBox = screen.getAllByRole("textbox");

      expect(expectedTextBox).toHaveLength(3);
    });
  });
});
