import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When the user write 'Vero' and'passwordX'for name, username and password", () => {
    test("Then it should fill the 2 inputs with the values of 'Vero' and'passwordX'", () => {
      const username = "Vero";
      const password = "passwordY";
      const textButton = "Sign in";
      render(
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      );

      const expectedElement1 = screen.queryByTestId("inputUsername");
      const expectedElement2 = screen.queryByTestId("inputPassword");

      userEvent.type(expectedElement1 as HTMLElement, username);
      userEvent.type(expectedElement2 as HTMLElement, password);

      const expectedButton = screen.getByText(textButton);
      userEvent.click(expectedButton);

      expect(expectedElement1).toHaveValue(username);
      expect(expectedElement2).toHaveValue(password);
      expect(expectedButton).not.toBeDisabled();
    });
  });
});
