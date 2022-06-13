import axios from "axios";
import { newPlaceMock, placesMock } from "../../mocks/placesMocks";
import {
  addPlaceActionCreator,
  deletePlaceActionCreator,
  updatePlaceActionCreator,
} from "../reducers/features/placesSlice/placesSlice";
import {
  addPlaceThunk,
  deletePlaceThunk,
  loadPlacesThunk,
  updatePlaceThunk,
} from "./placesThunks";

describe("Given a loadPlacesThunk middleware", () => {
  describe("When it's called with a token", () => {
    test("Then it should call the dispatch with the loadPlacesThunk", async () => {
      const places = [
        {
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
      ];

      const dispatch = jest.fn();
      const token = "token";

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { places }, status: 200 });

      const thunk = loadPlacesThunk(token);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's called and there's no token", () => {
    test("Then it should not call dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");
      const token = "token";

      const thunk = loadPlacesThunk(token);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given a addPlaceThunk middleware", () => {
  describe("When it's called with a place to create", () => {
    test("Then it should call the dispatch with the new created place", async () => {
      const dispatch = jest.fn();
      const action = addPlaceActionCreator(placesMock[0]);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      axios.post = jest.fn().mockResolvedValue({ data: placesMock[0] });

      const thunk = addPlaceThunk(newPlaceMock);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("when it's called with no token", () => {
    test("Then it should not call the dispatch function", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");

      const thunk = addPlaceThunk(newPlaceMock);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given a deletePlaceThunk middleware", () => {
  describe("When it's called with an Id", () => {
    test("Then it should call the dispatch with the delete action with the place Id received", async () => {
      const id = "ejsd02449b";
      const dispatch = jest.fn();
      const action = deletePlaceActionCreator(id);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      axios.delete = jest.fn().mockResolvedValue({});

      const thunk = deletePlaceThunk(id);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given a updatePlaceThunk middleware", () => {
  describe("When it's called with an Id to update a place", () => {
    test("Then it should call the dispatch with the new place updated", async () => {
      const dispatch = jest.fn();
      const action = updatePlaceActionCreator(placesMock[0]);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      axios.put = jest.fn().mockResolvedValue({ data: placesMock[0] });

      const thunk = updatePlaceThunk(placesMock[0].creator, newPlaceMock);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
