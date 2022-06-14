import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";

import { localStorageMock } from "./mocks/localStorageMock";

const getLocalStorage = localStorageMock;

const saveStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

Object.defineProperty(window, "localStorage", {
  value: getLocalStorage,
});

describe("Given an App component", () => {
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

      const expectedText = screen.getByText(/Become a Host/i);

      expect(expectedText).toBeInTheDocument();
    });
  });

  describe("When it's invoked with a login page and a token in the local storage", () => {
    saveStorage(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NjI0MzM5LCJleHAiOjE2NTQ2Mjc5Mzl9.gie1adxMy554IkDvorDNR10W9Xva8q5jQBaMJaD0Sqo"
    );
  });
});
