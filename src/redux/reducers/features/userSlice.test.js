import userReducer, {
  logInActionCreator,
  registerActionCreator,
} from "./userSlice";

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

      const receivedState = userReducer(initialState, loginAction);

      expect(receivedState).toEqual(user);
    });
  });

  describe("When it's invoked with a register action with a user", () => {
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

      const registerAction = registerActionCreator(user);

      const receivedState = userReducer(initialState, registerAction);

      expect(receivedState).toEqual(user);
    });
  });
});
