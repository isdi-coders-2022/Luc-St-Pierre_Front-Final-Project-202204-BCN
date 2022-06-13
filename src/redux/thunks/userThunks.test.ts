import axios from "axios";
import { mockUserAuthenticated } from "../../mocks/mockUser";
import { logInActionCreator } from "../reducers/features/userSlice/userSlice";
import { loginThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({
  username: "LearningX",
  name: "lucamino",
  email: "lucamino@gmail.com",
  image: "image",
  imageBackup: "image",
}));

describe("Given a LoginThunk middleware", () => {
  describe("When it's called with the right credentials", () => {
    test("Then it should call the dispatch with the logInActionCreator", async () => {
      const dispatch = jest.fn();
      const loginAction = logInActionCreator(mockUserAuthenticated);

      jest.spyOn(Storage.prototype, "setItem").mockReturnValue();
      axios.post = jest.fn().mockResolvedValue({ data: { token: "token" } });

      const thunk = loginThunk({
        username: mockUserAuthenticated.username,
        password: "",
      });
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loginAction);
    });
  });
});
