import { placesMock } from "../../../../mocks/placesMocks";

import placesReducer, {
  loadPlacesActionCreator,
  addPlaceActionCreator,
} from "./placesSlice";

describe("Given a placesReducer reducer", () => {
  describe("When it's invoked with an unknown action and an initial state", () => {
    test("Then it should return the same initial state", async () => {
      const action = {
        type: "places/unknownAction",
      };

      const initialState = {
        places: [],
        pages: 0,
        currentPage: 1,
        perPageCount: 8,
      };

      const receivedState = placesReducer(initialState, action);

      expect(receivedState).toEqual(initialState);
    });
  });

  describe("When it's invoked with a loadPlaces action and list of places", () => {
    test("Then it should return the same list of places", async () => {
      const action = loadPlacesActionCreator(placesMock);

      const initialState = {
        places: [],
        pages: 0,
        currentPage: 1,
        perPageCount: 8,
      };

      const { places } = placesReducer(initialState, action);

      expect(places).toEqual(placesMock);
    });
  });

  describe("When it receives an initial state with a new place and a addPlace action as a payload", () => {
    test("Then it should return a new places state with the new place added", async () => {
      const expectedLength = 1;
      const action = addPlaceActionCreator(placesMock[0]);

      const initialState = {
        places: [],
        pages: 0,
        currentPage: 1,
        perPageCount: 8,
      };

      const { places } = placesReducer(initialState, action);

      expect(places).toHaveLength(expectedLength);
    });
  });
});
