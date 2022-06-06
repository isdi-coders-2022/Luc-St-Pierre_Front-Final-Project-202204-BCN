import placesReducer from "./placesSlice";

describe("Given a placeSlices reducer", () => {
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
});
