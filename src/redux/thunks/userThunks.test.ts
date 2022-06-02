import { loginThunk } from "./userThunks";

describe("Given a LoginThunk middleware", () => {
  describe("When it's called with the right credentials", () => {
    test("Then it should call the dispatch with the logInActionCreator", async () => {
      const user = {
        name: "userTest",
        username: "LearningX",
        password: "abcd1234",
        image: "",
        id: "",
        authenticated: false,
      };

      const dispatch = jest.fn();

      const login = loginThunk(user);
      await login(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
