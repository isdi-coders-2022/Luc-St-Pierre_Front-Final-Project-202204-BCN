import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import { store } from "../../redux/store/store";
import Layout from "../Layout/Layout";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should display 1 link 'Become a Host'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Layout>
              <HomePage />
            </Layout>
          </Provider>
        </BrowserRouter>
      );

      const expectedLinks = screen.queryAllByRole("link");

      expect(expectedLinks[0]).toBeInTheDocument();
    });

    test("Then it should display 1 button 'Language and region'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Layout>
              <HomePage />
            </Layout>
          </Provider>
        </BrowserRouter>
      );

      const expectedLinks = screen.queryAllByRole("link");
      userEvent.click(expectedLinks[0]);

      const SignUp = screen.getAllByText("Open user menu");

      expect(SignUp[0]).toBeInTheDocument();
    });
  });
});
