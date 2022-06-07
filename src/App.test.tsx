import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import PlacesList from "./components/PlacesList/PlacesList";

import { localStorageMock } from "./mocks/localStorageMock";
import { placesMock } from "./mocks/placesMocks";

const getLocalStorage = localStorageMock;

const saveStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

Object.defineProperty(window, "localStorage", {
  value: getLocalStorage,
});

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text 'Filters'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );
      const expectedText = screen.getByText(/Filters/i);
      expect(expectedText).toBeInTheDocument();
    });

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

    test("Then it should display 1 link 'Language and region'", () => {
      const expectedNumberOfPlaces = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PlacesList showAllPlaces={placesMock} />
          </Provider>
        </BrowserRouter>
      );

      const listElements = screen.getAllByRole("listitem");
      expect(listElements).toHaveLength(expectedNumberOfPlaces);
    });
  });

  describe("When it's invoked with a login page and a token in the local storage", () => {
    saveStorage(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
    );

    test("Then it should render a token in the local storage and dispatch a login action", () => {
      const expectedToken = {
        user: {
          id: "629daf60066c9eb6317f409a",
          name: "lucamino",
          username: "LearningX",
          iat: 1654501224,
          exp: 1654504824,
          authenticated: true,
        },
        places: [],
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const getStoreActionState = store.getState();

      expect(window.localStorage.getItem("token")).toBe(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NTAxMjI0LCJleHAiOjE2NTQ1MDQ4MjR9.AMUNN7ZH6lu5vgXu7ZXzkN6UdYdR3kWbj7rZyRPkRao"
      );

      expect(getStoreActionState).toStrictEqual(expectedToken);
    });
  });
});
