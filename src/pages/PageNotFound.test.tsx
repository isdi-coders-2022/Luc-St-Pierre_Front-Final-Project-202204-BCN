import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockNavigate } from "../mocks/mockHooks";
import { store } from "../redux/store/store";
import PageNotFound from "./PageNotFound";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a PageNotFound component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a text '404 error,' and 'page not found.'", () => {
      const expectedText = ["404 error", "Page not found."];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PageNotFound />
          </Provider>
        </BrowserRouter>
      );

      const text1 = screen.getByText(expectedText[0]);
      const text2 = screen.getByText(expectedText[1]);

      expect(text1).toBeInTheDocument();
      expect(text2).toBeInTheDocument();
    });
  });

  describe("When it's invoked and user click on the 'Go back home' button", () => {
    test("Then the useNavigate hook should be called", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <PageNotFound />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: "Go back home" });

      userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
