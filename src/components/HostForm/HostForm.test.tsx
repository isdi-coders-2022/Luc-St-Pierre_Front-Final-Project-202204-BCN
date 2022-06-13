import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import HostForm from "./HostForm";

const mockUseNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest
    .fn()
    .mockResolvedValueOnce(null)
    .mockReturnValueOnce({ placeId: "3" }),
}));

describe("Given a HostForm component", () => {
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
  describe("When it's invoked", () => {
    test("Then it should return the expected radio button 'Apartment'", () => {
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

    test("Then it should render 9 inputs fields and 4 selects inputs", () => {
      const expectedNumberOfInputs = 9;
      const expectNumberOfSelects = 4;

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <HostForm />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      const selects = screen.getAllByRole("combobox");
      expect(inputs).toHaveLength(expectedNumberOfInputs);
      expect(selects).toHaveLength(expectNumberOfSelects);
    });
  });
});
