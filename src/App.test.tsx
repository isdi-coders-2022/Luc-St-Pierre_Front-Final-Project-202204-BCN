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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NjI0MzM5LCJleHAiOjE2NTQ2Mjc5Mzl9.gie1adxMy554IkDvorDNR10W9Xva8q5jQBaMJaD0Sqo"
    );

    test("Then it should render a token in the local storage and dispatch a login action", () => {
      const expectedToken = {
        user: {
          id: "629daf60066c9eb6317f409a",
          name: "lucamino",
          username: "LearningX",
          iat: 1654624339,
          exp: 1654627939,
          authenticated: true,
        },
        place: {
          title: "",
          description: "",
          image: "",
          address: "",
          city: "",
          placeType: "",
          placeDescription: "",
          price: 0,
          numberOfRooms: 0,
          numberOfBeds: 0,
          numberOfGuests: 0,
          creator: "",
          rating: 0,
          isListed: false,
          kilometers: 0,
          category: "",
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
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWRhZjYwMDY2YzllYjYzMTdmNDA5YSIsIm5hbWUiOiJsdWNhbWlubyIsInVzZXJuYW1lIjoiTGVhcm5pbmdYIiwiaWF0IjoxNjU0NjI0MzM5LCJleHAiOjE2NTQ2Mjc5Mzl9.gie1adxMy554IkDvorDNR10W9Xva8q5jQBaMJaD0Sqo"
      );

      expect(getStoreActionState).toStrictEqual(expectedToken);
    });
  });
});
