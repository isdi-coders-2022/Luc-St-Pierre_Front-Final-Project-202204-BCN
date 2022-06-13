import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { placesMock } from "../../mocks/placesMocks";
import { store } from "../../redux/store/store";
import PlacesList from "./PlacesList";

describe("Given a PlacesList component", () => {
  describe("When it's rendered with a list of 1 place", () => {
    test("Then it should return", () => {
      const expectedNumberOfPlaces = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PlacesList places={placesMock} />
          </Provider>
        </BrowserRouter>
      );

      const listElements = screen.getAllByRole("listitem");
      expect(listElements).toHaveLength(expectedNumberOfPlaces);
    });
  });
});
