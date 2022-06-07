import { configureStore, createSlice } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../../pages/HomePage";
import { store } from "../../redux/store/store";
import Layout from "../Layout/Layout";
import Navigation from "./Navigation";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

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

  test("Then it should display the menu items button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </BrowserRouter>
    );

    const logoutButton = screen.getByRole("button", {
      name: "Open user menu",
    });
    userEvent.click(logoutButton);

    expect(logoutButton).toBeInTheDocument();
  });

  describe("When it's invoked and user click no the logout button", () => {
    test("Then it should invoke the dispatch action logout action creator", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      );

      const logoutButton = screen.getByRole("button", {
        name: "Open user menu",
      });
      userEvent.click(logoutButton);

      const logout = screen.getByRole("menuitem", {
        name: "Log out",
      });

      fireEvent.click(logout);
      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked and there is a user authenticated", () => {
    test("Then it should call navigate with the route '/home'", () => {
      jest.mock("jwt-decode", () => () => ({
        user: {
          id: "629daf60066c9eb6317f409a",
          name: "lucamino",
          username: "LearningX",
          iat: 1654501224,
          exp: 1654504824,
          authenticated: true,
        },
        places: { allPlaces: [] },
      }));

      const userMockSlice = createSlice({
        name: "user",
        initialState: {
          id: "629daf60066c9eb6317f409a",
          name: "lucamino",
          username: "LearningX",
          iat: 1654501224,
          exp: 1654504824,
          authenticated: true,
        },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/home");
    });
  });
});
