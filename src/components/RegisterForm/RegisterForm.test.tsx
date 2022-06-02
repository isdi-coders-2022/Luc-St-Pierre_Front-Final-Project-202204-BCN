import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockUseDispatch,
}));

describe("Given a RegisterForm component", () => {
  describe("When it's rendered", () => {
    test("It should display a button with the text 'Sign up'", () => {
      const textButton = "Sign up";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedText = screen.getByText(textButton);

      expect(expectedText).toBeInTheDocument();
    });

    test("It should display a form with 3 inputs of type text", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedTextBox = screen.getAllByRole("textbox");

      expect(expectedTextBox).toHaveLength(3);
    });
  });

  describe("When it's Sign up button is clicked", () => {
    test("Then it should call the dispatch middleware", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const textBoxes = screen.getAllByRole("textbox");
      const password = screen.getByText("Password");
      userEvent.type(password, "abcd1234");
      textBoxes.forEach((textbox) => userEvent.type(textbox, "tester"));

      const button = screen.getByRole("button", { name: /Sign up/i });
      userEvent.click(button);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });
});
