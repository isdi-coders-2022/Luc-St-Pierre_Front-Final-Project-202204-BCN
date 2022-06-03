import userReducer, { logInActionCreator } from "./userSlice";

describe("Given a userSlice reducer", () => {
  describe("When it's invoked with a login action with a user", () => {
    test("Then it should return the user", () => {
      const initialState = {
        name: "",
        username: "",
        email: "",
        image: "",
        id: "",
        authenticated: false,
      };
      const user = {
        name: "Lucamino",
        username: "LearningX",
        email: "test@test.com",
        image: "",
        id: "1234567890",
        authenticated: false,
      };

      const loginAction = logInActionCreator(user);

      const response = userReducer(initialState, loginAction);

      expect(response).toEqual(user);
    });
  });
});
