import { mockUserAuthenticated } from "../../mocks/mockUser";
import { logInActionCreator } from "../reducers/features/userSlice";
import { loginThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({
  username: "LearningX",
  name: "lucamino",
  email: "lucamino@gmail.com",
  image: "image",
}));

describe("Given a LoginThunk middleware", () => {
  describe("When it's called with the right credentials", () => {
    test("Then it should call the dispatch with the logInActionCreator", async () => {
      const dispatch = jest.fn();

      const user = {
        username: "LearningX",
        password: "abcd1234",
      };

      const loginAction = logInActionCreator(mockUserAuthenticated);

      const thunk = loginThunk(user);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loginAction);
    });
  });
});
