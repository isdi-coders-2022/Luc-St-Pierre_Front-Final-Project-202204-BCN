import axios from "axios";
import { loginThunk, registerThunk } from "./userThunks";

describe("Given a LoginThunk middleware", () => {
  describe("When it's called with the right credentials", () => {
    test("Then it should call the dispatch with the logInActionCreator", async () => {
      const user = {
        username: "LearningX",
        password: "abcd1234",
      };

      const dispatch = jest.fn();

      const login = loginThunk(user);
      await login(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a registerThunk middleware", () => {
  describe("When it's called and receives the new user data", () => {
    test("Then it should call the dispatch with the registerActionCreator", async () => {
      const newUser = {
        name: "userTest",
        username: "LearningX",
        email: "test@test.com",
        password: "abcd1234",
        image: "",
        id: "",
        authenticated: false,
      };

      const dispatch = jest.fn();

      axios.post = jest
        .fn()
        .mockResolvedValue({ data: { username: "LearningX" } });

      const retister = registerThunk(newUser);
      await retister(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
