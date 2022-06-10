import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import HostForm from "./HostForm";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given a HostForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should return the expected radio button 'Apartment'", () => {
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
            <HostForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedText = screen.getByRole("textbox", {
        name: "Description",
      });
      expect(expectedText).toBeInTheDocument();
    });
  });
});
