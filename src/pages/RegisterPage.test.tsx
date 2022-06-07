import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store/store";
import RegisterPage from "./RegisterPage";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given a RegisterPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button with the text 'Sign up'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button", { name: "Sign up" });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered and user is already register", () => {
    test("Then it should navigate to the login page", () => {
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
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });
  });
});
