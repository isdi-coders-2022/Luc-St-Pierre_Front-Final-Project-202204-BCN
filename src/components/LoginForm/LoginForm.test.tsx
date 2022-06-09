import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";

import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When the user write 'Vero' in the input field for useranme", () => {
    test("Then it should fill the input username with 'Vero'", () => {
      const labelToFind = "Username";
      const inputTextValue = "Vero";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const label: HTMLLabelElement = screen.getByLabelText(labelToFind);
      userEvent.type(label, inputTextValue);

      expect(label).toHaveValue(inputTextValue);
    });
  });

  describe("When the username and password are filled and the Sign in button is clicked", () => {
    test("Then it should reset both fields as empty", () => {
      const labelUsername = "Username";
      const labelPassword = "Password";
      const inputTextValue = "Vero";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const username: HTMLLabelElement = screen.getByLabelText(labelUsername);
      const password: HTMLLabelElement = screen.getByLabelText(labelPassword);
      const submitButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Sign in",
      });

      userEvent.type(username, inputTextValue);
      userEvent.type(password, inputTextValue);
      userEvent.click(submitButton);

      expect(username).toHaveValue("");
      expect(password).toHaveValue("");
    });
  });
});
