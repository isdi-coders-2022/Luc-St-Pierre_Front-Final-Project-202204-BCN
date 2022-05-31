import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("When the user write 'Test', 'testX', 'testx@gmail.com' and 'passwordX' for name, username, email and password", () => {
    test("Then it should fill all inputs with the values of 'Test', 'textX', 'testx@gmail.com', 'passwordX'", () => {
      const name = "Test";
      const username = "textX";
      const email = "testx@gmail.com";
      const password = "passwordX";
      const textButton = "Sign up";

      render(
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      );

      const expectedElement1 = screen.queryByTestId("inputName");
      const expectedElement2 = screen.queryByTestId("inputUsername");
      const expectedElement3 = screen.queryByTestId("inputEmail");
      const expectedElement4 = screen.queryByTestId("inputPassword");

      userEvent.type(expectedElement1 as HTMLElement, name);
      userEvent.type(expectedElement2 as HTMLElement, username);
      userEvent.type(expectedElement3 as HTMLElement, email);
      userEvent.type(expectedElement4 as HTMLElement, password);

      const expectedButton = screen.getByText(textButton);
      userEvent.click(expectedButton);

      expect(expectedElement1).toHaveValue(name);
      expect(expectedElement2).toHaveValue(username);
      expect(expectedElement3).toHaveValue(email);
      expect(expectedElement4).toHaveValue(password);
      expect(expectedButton).not.toBeDisabled();
    });
  });
});
