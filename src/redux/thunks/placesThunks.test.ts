import axios from "axios";
import { loadPlacesThunk } from "./placesThunks";

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
