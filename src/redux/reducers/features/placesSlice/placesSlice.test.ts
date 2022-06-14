import { placesMock } from "../../../../mocks/placesMocks";

import placesReducer, {
  loadPlacesActionCreator,
  addPlaceActionCreator,
  deletePlaceActionCreator,
  updatePlaceActionCreator,
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

  describe("When it's invoked with a deletePlace action with an id and an initial state with 2 places", () => {
    test("Then it should return 1 places to the places array", async () => {
      const expectedLength = 2;
      const action = deletePlaceActionCreator(placesMock[0].creator);

      const initialState = {
        places: placesMock,
        pages: 0,
        currentPage: 1,
        perPageCount: 8,
      };

      const { places } = placesReducer(initialState, action);

      expect(places).toHaveLength(expectedLength);
    });
  });

  describe("When it's invoked with a updatePlace action with 2 places as an initial state and a update place", () => {
    test("Then it should update the place and change it's title", async () => {
      const updatedNote = {
        title: "Canada places",
        description: "This is a description",
        image: [{ downloadURL: "abcd.jpeg" }],
        address: "34 Llurai",
        city: "Mongat",
        placeType: "House",
        placeDescription: "casa",
        price: "86",
        numberOfRooms: "3",
        numberOfBeds: "2",
        numberOfGuests: "3",
        country: "Canada",
        creator: "629b88b726b95714b076c60a",
        rating: "4.88",
        isListed: true,
        kilometers: "343",
        category: "National parks",
        location: {
          type: "Point",
          coordinates: [41.3874, 2.1686],
        },
      };

      const action = updatePlaceActionCreator(updatedNote);

      const initialState = {
        places: placesMock,
        pages: 0,
        currentPage: 1,
        perPageCount: 8,
      };

      const { places } = placesReducer(initialState, action);

      expect(places[0]).toHaveProperty("title", updatedNote.title);
    });
  });
});
