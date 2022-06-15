import axios from "axios";
import { mockUserAuthenticated } from "../../mocks/mockUser";
import { setLoadingOffWithMessage } from "../../utils/modal/modal";
import { logInActionCreator } from "../reducers/features/userSlice/userSlice";
import { loginThunk, registerThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({
  id: "1",
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

describe("Given the registerThunk function", () => {
  describe("When it's called and receives de new user data", () => {
    test("Then it should call dispatch with the loginThunk with the user data", async () => {
      const newUserData = {
        name: "testUserX",
        username: "testUserX",
        email: "testUserX",
        password: "testUserX",
        image: "",
      };

      const userFormData = new FormData();
      userFormData.append("name", newUserData.name);
      userFormData.append("username", newUserData.username);
      userFormData.append("email", newUserData.email);
      userFormData.append("password", newUserData.password);
      userFormData.append("image", newUserData.image);

      const dispatch = jest.fn();
      axios.post = jest
        .fn()
        .mockResolvedValue({ data: { username: "testUserX" } });

      const thunk = registerThunk(newUserData.username, newUserData.password);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's called and and axios throws an error", () => {
    test("Then it should not call dispatch", async () => {
      const newUserData = {
        name: "testUserX",
        username: "testUserX",
        email: "testUserX",
        password: "testUserX",
        image: "",
      };

      const userFormData = new FormData();
      userFormData.append("name", newUserData.name);
      userFormData.append("username", newUserData.username);
      userFormData.append("email", newUserData.email);
      userFormData.append("password", newUserData.password);
      userFormData.append("image", newUserData.image);

      const dispatch = jest.fn();
      axios.post = jest.fn().mockRejectedValue({});

      const thunk = registerThunk(newUserData.username, newUserData.password);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
