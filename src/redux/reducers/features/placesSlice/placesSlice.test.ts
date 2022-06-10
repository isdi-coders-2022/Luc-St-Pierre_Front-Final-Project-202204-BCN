import { placesMock } from "../../../../mocks/placesMocks";
import { IPlace } from "../../../../types/places.types";
import placesReducer, { loadPlacesActionCreator } from "./placesSlice";

describe("Given a placesReducer reducer", () => {
  describe("When it's invoked with an unknown actin and an initial state", () => {
    test("Then it should return the same initial state", async () => {
      const action = {
        type: "places/unknownAction",
      };

      const initialState: IPlace[] = [];

      const receivedState = placesReducer(initialState, action);

      expect(receivedState).toEqual(initialState);
    });
  });

  describe("When it's invoked with a loadPlaces action and list of places", () => {
    test("Then it should return the same list of places", async () => {
      const action = loadPlacesActionCreator(placesMock);

      const initialState: IPlace[] = [];

      const places = placesReducer(initialState, action);

      expect(places).toEqual(placesMock);
    });
  });
});
