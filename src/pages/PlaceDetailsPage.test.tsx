import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store/store";
import PlaceDetailsPage from "./PlaceDetailsPage";

describe("Given a PlaceDetailsPage component", () => {
  describe("When invoked with the place 'Madrid'", () => {
    test("Then it should render an place Card", () => {
      const expectTitle = "House near beaches";
      const expectedButton = "Delete";

      const loadPlacesAction = {
        type: "place/loadPlace",
        payload: {
          title: "House near beaches",
          description: "This is a description",
          image: "abcd.jpeg",
          address: "34 Llurai",
          city: "Mongat",
          placeType: "House",
          price: 86,
          numberOfRooms: 3,
          numberOfBeds: 2,
          numberOfGuests: 3,
          creator: "629b88b726b95714b076c60a",
          rating: 4.88,
          isListed: true,
          kilometers: 343,
          category: "Nationall parks",
        },
      };

      store.dispatch(loadPlacesAction);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PlaceDetailsPage />
          </Provider>
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", { name: expectTitle });
      const button = screen.getByRole("button", { name: expectedButton });

      expect(title).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
