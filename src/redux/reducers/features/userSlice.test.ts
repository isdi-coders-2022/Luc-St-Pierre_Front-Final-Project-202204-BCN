import { mockUserAuthenticated } from "../../../mocks/mockUser";
import userReducer, {
  logInActionCreator,
  logOutActionCreator,
} from "./userSlice";

describe("Given a userSlice reducer", () => {
  describe("When it's invoked with a login action with a user", () => {
    test("Then it should return the user", () => {
      const initialState = {
        userData: {
          username: "",
          name: "",
          email: "",
          image: "",
        },
        authenticated: false,
      };
      const userData = mockUserAuthenticated;

      const expectedState = {
        userData: mockUserAuthenticated,
        authenticated: true,
      };

      const loginAction = logInActionCreator(userData);

      const userState = userReducer(initialState, loginAction);

      expect(userState).toEqual(expectedState);
    });
  });

  describe("When it's invoked with a user with data and a logout action", () => {
    test("Then it should return a empty state with authenticated set to false", () => {
      const initialState = {
        userData: {
          username: "LearningX",
          name: "lucamino",
          email: "lucamino@gmail.com",
          image: "image",
        },
        authenticated: true,
      };

      const expectedState = {
        userData: {
          username: "",
          name: "",
          email: "",
          image: "",
        },
        authenticated: false,
      };

      const logoutAction = logOutActionCreator();

      const userState = userReducer(initialState, logoutAction);

      expect(userState).toEqual(expectedState);
    });
  });
});
