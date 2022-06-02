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
});
