import { placesMock } from "../../../../mocks/placesMocks";
import placesReducer, { loadPlacesActionCreator } from "./placesSlice";

describe("Given a placesReducer reducer", () => {
  describe("When it's invoked with an unknown actin and an initial state", () => {
    test("Then it should return the same initial state", async () => {
      const action = {
        type: "places/unknownAction",
      };

      const initialState = {
        allPlaces: [],
      };

      const receivedState = placesReducer(initialState, action);

      expect(receivedState).toEqual(initialState);
    });
  });

  describe("When it's invoked with a loadPlaces action and list of places", () => {
    test("Then it should return the same list of places", async () => {
      const action = loadPlacesActionCreator(placesMock);

      const initialState = {
        allPlaces: [],
      };

      const { allPlaces } = placesReducer(initialState, action);

      expect(allPlaces).toEqual(placesMock);
    });
  });
});
